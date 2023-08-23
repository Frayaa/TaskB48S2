import { Repository } from "typeorm"
import { Thread } from "../entities/Threads"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { createdThreadSchema } from "../utils/validators/thread"
import { v2 as cloudinary } from "cloudinary"
import { cloudinaryConfig } from "../libs/cloudinary"

class ThreadService {
  private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread)

  async find(reqQuery?: any, loginSession?: any): Promise<any> {
    try {
      const limit = parseInt(reqQuery.limit ?? 0)

      const threads = await this.threadRepository.find({
        relations: ["user", "likes.user", "replies"],
        order: {
          id: "DESC",
        },
        take: limit,
      })

      // let newResponse = []

      return threads.map((element) => ({
        id: element.id,
        content: element.content,
        image: element.image,
        posted_at: element.posted_at,
        user: element.user,
        replies_count: element.replies.length,
        likes_count: element.likes.length,
        is_liked: element.likes.some(
          (like: any) => like.user.id === loginSession.user.id
        ),
      }))

      // threads.map((element) => {
      //   element.image = element.image
      //   newResponse.push({
      //     ...element,
      //     likes_count: element.likes.length,
      //     replies_count: element.replies.length,
      //   })
      // })
      // return res.status(200).json(newResponse)
    } catch (err) {
      throw new Error("Server Error")
    }
  }
  async findOne(id: number, loginSession: any): Promise<any> {
    try {
      // const id = parseInt(req.params.id)
      const threads = await this.threadRepository.findOne({
        where: {
          id: id,
        },
        relations: ["user", "replies", "likes.user"],
      })

      return {
        id: threads.id,
        content: threads.content,
        image: threads.image,
        posted_at: threads.posted_at,
        user: threads.user,
        replies_count: threads.replies.length,
        likes_count: threads.likes.length,
        is_liked: threads.likes.some(
          (like: any) => like.user.id === loginSession.user.id
        ),
      }

      // return res.status(200).json(threads)
    } catch (err) {
      throw new Error("Server error")
    }
  }

  async create(req: Request, res: Response) {
    try {
      const filename = res.locals.filename
      const data = {
        content: req.body.content,
        image: filename,
      }

      const loginSession = res.locals.loginSession
      console.log(loginSession)

      const { error } = createdThreadSchema.validate(data)

      
            if (error) {
              return res.status(400).json({
                error: error,
              })
            }
      cloudinaryConfig()

      const cloudResponse = await cloudinary.uploader.upload(
        "./uploads/" + filename
      )

      const thread = this.threadRepository.create({
        content: data.content,
        image: cloudResponse.secure_url,
        user: {
          id: loginSession.user.id,
        },
      })

      const createdThread = this.threadRepository.save(thread)
      return res.status(200).json(thread)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id)

      const deleteThread = this.threadRepository.delete(id)

      return res.status(200).json({
        message: "Thread Telah dihapus",
      })
    } catch (err) {
      return res.status(500).json("Server error")
    }
  }
  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id)
      const threads = await this.threadRepository.findOne({
        where: {
          id: id,
        },
      })

      if (!threads) {
        return res.status(500).json("Thread Id not found")
      }

      const data = req.body

      if (data.content != "") {
        threads.content = data.content
      }
      if (data.image != "") {
        threads.image = data.image
      }

      const updateThread = this.threadRepository.save(threads)

      return res.status(200).json({
        message: "Thread Telah di update",
      })
    } catch (err) {
      return res.status(500).json("Server error")
    }
  }
}

export default new ThreadService()
