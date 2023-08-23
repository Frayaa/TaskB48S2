import { Request, Response } from "express"
import { createdThreadSchema } from "../utils/validators/thread"
import { sendMessageToQueue } from "../libs/rabbitmq"

class ThreadQueue {
  async create(req: Request, res: Response) {
    try {
      const queueName = "thread_queue"
      const filename = res.locals.filename

      const data = {
        content: req.body.content,
        image: filename,
      }

      const { error } = createdThreadSchema.validate(data)

      if (error) {
        return res.status(400).json({
          error: error,
        })
      }

      const loginSession = res.locals.loginSession

      const payload = {
        content: data.content,
        image: data.image,
        user_id: loginSession.user.id,
      }

      const errorQueue = await sendMessageToQueue(queueName, payload)

      if (errorQueue) {
        return res.status(500).json({
          error: errorQueue,
        })
      }

      return res.status(200).json({
        message: "Thread is queued",
        data: payload,
      })
    } catch (err) {
      console.log("Error processing queue:", err)
      return res.status(500).json({
        error: "Server Error:", err,
      })
    }
  }
}

export default new ThreadQueue()
