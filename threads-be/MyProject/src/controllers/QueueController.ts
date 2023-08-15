import { Request, Response } from "express"
import * as amqp from "amqplib"

class QueueController {
  async enqueue(req: Request, res: Response) {
    try {
      const payload = {
        message: "haihaihaihai",
      }

      const connection = await amqp.connect("amqp://localhost")
      const chanel = await connection.createChannel()

      await chanel.assertQueue("thread")

      chanel.sendToQueue("thread", Buffer.from(JSON.stringify(payload)))

      await chanel.close()
      await connection.close()

      res.status(200).json({
        message: "Thread is queued",
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: "Something wrong in server",
      })
    }
  }
}

export default new QueueController()
