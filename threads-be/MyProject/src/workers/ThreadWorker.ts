import { EventEmitter } from "stream"
import  amqp = require ("amqplib")
import "dotenv/config"
import { AppDataSource } from "../data-source"
import { Thread } from "../entities/Threads"
import { v2 as cloudinary } from "cloudinary"
import { cloudinaryConfig } from "../libs/cloudinary"

export class ThreadWorker {
  // public emitter = new EventEmitter()

  async create(queueName: string, connection: amqp.Connection) {
    // const queueName = "threads_queue"
    try {
      const channel = await connection.createChannel()
      console.log("ini")
      await channel.assertQueue(queueName)
      await channel.consume(queueName, async (message) => {
        console.log("ini", message)
        if (message !== null) {
          try {
            const payload = JSON.parse(message.content.toString())

            console.log("Received message:", payload)

            const cloudinaryRespon = await cloudinary.uploader.upload(
              "./uploads/" + payload.image
            )

            const thread = AppDataSource.getRepository(Thread).create({
              content: payload.content,
              image: cloudinaryRespon.secure_url,
              user: payload.user_id,
            })

            const createdThread = await AppDataSource.getRepository(
              Thread
            ).save(thread)
            console.log("Thread is created")
            channel.ack(message)
          } catch (err) {
            console.log(err)
          }
        }
      })
    } catch (err) {
      console.log("Error process queue", err)
    }
  }
}

export default new ThreadWorker()
