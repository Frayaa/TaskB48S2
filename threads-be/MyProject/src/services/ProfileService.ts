import { FindOptionsWhere, Like, Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User"
import { Request, Response } from "express"
import { cloudinaryConfig } from "../libs/cloudinary"
const cloudinary = require("cloudinary").v2

class ProfileService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

  async find(req: Request, res: Response) {
    try {
      const profile = await this.userRepository.find({
        relations: ["threads"],
      })

      return res.status(200).json(profile)
    } catch (err) {
      return res.status(500).json({
        error: err.message,
      })
    }
  }

  async findOne(id: number, loginSession: any): Promise<any> {
    try {
      const profile = await this.userRepository.findOne({
        where: {
          id: id,
        },
        relations: ["threads"],
      })

      return profile
    } catch (err) {
      throw new Error("Server error")
    }
  }

  // async search(req: Request, res: Response) {
  //   try {
  //     const { full_name, username, email } = req.query
  //     console.log("Query Parameters:", req.query)

  //     // const filter = {full_name, username, email};
  //     const filter: FindOptionsWhere<User> = {}
  //     console.log("filter:", filter)

  //     if (full_name) {
  //       filter.full_name = full_name as string
  //     }

  //     if (username) {
  //       filter.username = username as string
  //     }
  //     if (email) {
  //       filter.email = email as string
  //     }

  //     const profile = await this.userRepository.find({
  //       where: filter,
  //       relations: ["threads"],
  //     })

  // if (profile.length === 0) {
  //   return res.status(404).json({ message: "No matching users found." })
  // }

  //     console.log("search", profile)
  //     return profile
  //   } catch (err) {
  //     throw new Error("Server error")
  //   }
  // }

  async search(req: Request, res: Response) {
    try {
      const { query } = req.query

      if (!query) {
        return res.status(400).json({ error: "Query parameter is required" })
      }

      const profiles = await this.userRepository.find({
        where: [
          { full_name: Like(`%${query}%`) },
          { username: Like(`%${query}%`) },
        ],
        relations: ["threads"],
      })

      if (profiles.length === 0) {
        return res.status(404).json({ message: "User Not Found" })
      }

      return res.status(200).json(profiles)
    } catch (err) {
      return res.status(500).json({
        error: err.message,
      })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const filename = req.file.filename
      const loginSession = res.locals.loginSession

      const users = await this.userRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
      })

      if (!users) {
        return res.status(500).json("User Id not found")
      }

      cloudinaryConfig()
      const cloudinaryResp = await cloudinary.uploader.upload(
        "./uploads/" + filename
      )

      const { full_name, username, profile_picture, description } = req.body

      if (full_name != "") {
        users.full_name = full_name
      }
      if (username != "") {
        users.username = username
      }

      if (profile_picture != "") {
        users.profile_picture = cloudinaryResp.secure_url
      }
      if (description != "") {
        users.description = description
      }

      const updateProfile = await this.userRepository.save(users)

      return res.status(200).json(updateProfile)
    } catch (err) {
      return res.status(500).json("Server error")
    }
  }

  async getRandomUser(): Promise<User[]> {
    const totalUser = await this.userRepository.count()
    const random = await this.userRepository
      .createQueryBuilder("user")
      .orderBy("RANDOM()")
      .take(4)
      .getMany()

    return random
  }
}

export default new ProfileService()
