import { Request, Response } from "express"
import { sendMessageToQueue } from "../libs/rabbitmq"
import { profileSchema } from "../utils/validators/profile"
import { Repository } from "typeorm"
import { User } from "../entities/User"
import { AppDataSource } from "../data-source"

class ProfileQueue {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

  async patch(req: Request, res: Response) {
    try {
      const queueName = "profile_queue"
      const filename = res.locals.filename
      const loginSession = res.locals.loginSession


    if (!filename) {
      return res.status(400).json({
        error: "Filename is not defined in res.locals",
      });
    }

      console.log("filename:", filename)

      const profile = await this.userRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
      })

      const data = req.body

      if (data.full_name != "") {
        profile.full_name = data.full_name
      }
      if (data.username != "") {
        profile.username = data.username
      }
      if (data.username != "") {
        profile.email = data.email
      }
      if (data.profile_picture != "") {
        profile.profile_picture = filename.profile_picture
      }
      if (data.description != "") {
        profile.description = data.description
      }
      //   const { error } = profileSchema.validate(data)

      //   if (error) {
      //     return res.status(400).json({
      //       error: error,
      //     })
      //   }

      //   const payload = {
      //     id:data.id,
      //     full_name: data.full_name,
      //     username: data.username,
      //     email: data.email,
      //     profile_picture: data.profile_picture,
      //     description: data.description,
      //     user_id: loginSession.user.id,
      //   }

      await this.userRepository.save(profile);
      
      const errorQueue = await sendMessageToQueue(queueName, data)

      if (errorQueue) {
        return res.status(500).json({
          err: errorQueue,
        })
      }

      return res.status(200).json({
        message: "Profile edited",
        data: data,
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: err.message,
        
      })
    }
  }
}

export default new ProfileQueue()
