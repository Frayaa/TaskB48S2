// import { EventEmitter } from "stream"
// import * as amqp from "amqplib"
// import { AppDataSource } from "../data-source"
// import { Thread } from "../entities/Threads"

// class ThreadWorker {
//   public emitter = new EventEmitter()

//   async create(queueName: string, connection: amqp.Connection) {
//     try {
//       const channel = await connection.createChannel()

//       await channel.assertQueue(queueName)
//       await channel.consume(queueName, async (message) => {
//         if (message !== null) {
//           try {
//             const payload = JSON.parse(message.content.toString())

//             console.log("Received message:", payload)

//             const cloudinaryRespon = await cloudinary.uploader.upload(
//               "./uploads/" + payload.image
//             )

//             const thread = AppDataSource.getRepository(Thread).create({
//               content: payload.content,
//               image: cloudinaryRespon.secure_url,
//               user: {
//                 id: payload.user_id,
//               },
//             })

//             const createdThread = await AppDataSource.getRepository(
//               Thread
//             ).save(thread)

//             this.emitter.emit("message")
//           } catch (err) {
//             console.log(err)
//           }
//         }
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// export default new ThreadWorker()
