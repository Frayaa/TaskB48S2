import { Repository } from "typeorm"
import { Follow } from "../entities/Follows"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User"
import { query } from "express"
import { error } from "console"

class FollowService {
  private readonly followRepository: Repository<Follow> =
    AppDataSource.getRepository(Follow)

  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

  async find(
    loginSession: any,
    queryType: string,
    queryLimit: number
  ): Promise<any> {
    try {
      let follows: Follow[]

      if (queryType === "followings") {
        follows = await this.followRepository.find({
          take: queryLimit,
          where: {
            follower: {
              id: loginSession.user.id,
            },
          },
          relations: ["followed", "follower"],
        })
        return follows.map((follow) => ({
          id: follow.id,
          user_id: follow.followed.id,
          username: follow.followed.username,
          full_name: follow.followed.full_name,
          email: follow.followed.email,
          profile_picture: follow.followed.profile_picture,
          description: follow.followed.description,
          is_followed: true,
        }))
      } else if (queryType === "followers") {
        follows = await this.followRepository.find({
          take: queryLimit,
          where: {
            followed: {
              id: loginSession.user.id,
            },
          },
          relations: ["followed", "follower"],
        })
        return await Promise.all(
          follows.map(async (follow) => {
            const isFollowed = await this.followRepository.count({
              where: {
                follower: {
                  id: loginSession.user.id,
                },
                followed: {
                  id: follow.follower.id,
                },
              },
            })

            return {
              id: follow.id,
              user_id: follow.follower.id,
              username: follow.follower.username,
              full_name: follow.follower.full_name,
              email: follow.follower.email,
              profile_picture: follow.follower.profile_picture,
              description: follow.follower.description,
              is_followed: isFollowed > 0,
            }
          })
        )
      }
      return {
        message: `Please specify valid Query "type" (followers/followings)`,
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.message)
    }
  }

  async create(reqBody: any, loginSession: any): Promise<any> {
    try {
      const followExist = await this.followRepository.count({
        where: {
          follower: {
            id: loginSession.user.id,
          },
          followed: {
            id: reqBody.followed_user_id,
          },
        },
      })

      if (followExist > 0) {
        throw new Error("You already follow this user")
      }

      if (reqBody.followed_user_id === loginSession.user.id) {
        throw new Error("You can't Follow yourself")
      }

      const userExist = await this.userRepository.findOne({
        where: {
          id: reqBody.followed_user_id,
        },
      })

      if (!userExist) {
        throw new Error("This user doesn't exist")
      }

      console.log("Followed User ID:", reqBody.followed_user_id)
      console.log("User Exist Result:", userExist)

      const follow = this.followRepository.create({
        follower: {
          id: loginSession.user.id,
        },
        followed: {
          id: reqBody.followed_user_id,
        },
      })

      await this.followRepository.save(follow)
      return {
        message: "You follow this user",
        follow: follow,
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.message)
    }
  }

  async delete(follwedUserId: number, loginSession: any): Promise<any> {
    try {
      const follow = await this.followRepository.findOne({
        where: {
          follower: {
            id: loginSession.user.id,
          },
          followed: {
            id: follwedUserId,
          },
        },
      })

      if (!follow) {
        throw new Error("You didn't follow this user")
      }

      await this.followRepository.delete({
        id: follow.id,
      })

      return {
        message: "You unfollow this user",
        follow,
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.message)
    }
  }
}

export default new FollowService()
