import { Repository } from "typeorm"
import { Thread } from "../entities/Threads"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { createdThreadSchema } from "../utils/validators/thread"

class ThreadService {
  private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread)

  async find(req: Request, res: Response) {
    try {
      const threads = await this.threadRepository.find({
        relations: ["user"],
      })
      return res.status(200).json(threads)
    } catch (err) {
      return res.status(500).json("Server error")
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id)
      const threads = await this.threadRepository.findOne({
        where: {
          id: id,
        },
        relations: ["user"],
      })
      return res.status(200).json(threads)
    } catch (err) {
      return res.status(500).json("Server error")
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body

      const { error, value } = createdThreadSchema.validate(data)

      if (error) {
        return res.status(400).json({
          error: error.details[0].message,
        })
      }

      const thread = this.threadRepository.create({
        content: value.content,
        image: value.image,
      })

      const createdThread = this.threadRepository.save(thread)
      return res.status(200).json(thread)
    } catch (err) {
      return res.status(500).json("Server error")
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
