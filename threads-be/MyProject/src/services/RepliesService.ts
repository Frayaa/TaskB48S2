import { Repository } from "typeorm"
import { Thread } from "../entities/Threads"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { createdThreadSchema } from "../utils/validators/thread"
import { useParams } from "react-router-dom"
import { v2 as cloudinary } from "cloudinary"
import cloudinaryConfig from "../libs/config"
import { Reply } from "../entities/Reply"

class RepliesService {
  private readonly replyRepository: Repository<Reply> =
    AppDataSource.getRepository(Reply)

  async find(req: Request, res: Response) {
    try {
      const threadId = parseInt(req.query.thread_id as string)

      const replies = await this.replyRepository.find({
        relations: ["user"],
        where: {
          thread: {
            id: threadId,
          },
        },
        order: {
          id: "DESC",
        },
      })

      return res.status(200).json(replies)
    } catch (err) {
      return res.status(500).json("Server error")
    }
  }

  async create(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession

      const replies = this.replyRepository.create({
        content: req.body.content,
        user: {
          id: loginSession.user.id,
        },
        thread: {
          id: req.body.thread_id,
        },
      })

      const createdReplies = this.replyRepository.save(replies)
      return res.status(200).json(replies)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}

export default new RepliesService()
