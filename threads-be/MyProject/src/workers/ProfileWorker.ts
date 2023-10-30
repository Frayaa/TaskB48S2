// import * as amqp from "amqplib"
// import { v2 as cloudinary } from "cloudinary"
// import { AppDataSource } from "../data-source"
// import { User } from "../entities/User"
// import { channel } from "diagnostics_channel"
// import { Request } from "express"

// class ProfileWorker {
//   async patch(queueName: string, connection: amqp.Connection, req: Request) {
//     try {
//       const chanel = await connection.createChannel()
//       console.log("profilequeue")
//       await chanel.assertQueue(queueName)
//       await chanel.consume(queueName, async (message) => {
//         if (message !== null) {
//           try {
//             const filename = req.file.filename
//             const payload = JSON.parse(message.content.toString())

//             const cloudinaryResp = await cloudinary.uploader.upload(
//               "./uploads/" + payload.profile_picture
//             )

//             const user = await AppDataSource.getRepository(User).findOne({
//               where: { id: payload.user_id },
//             });

//             if (user) {
//               user.full_name = payload.full_name;
//               user.username = payload.username;
//               user.email = payload.email;
//               user.profile_picture = cloudinaryResp.secure_url;
//               user.description = payload.description;

//               const updatedUser = await AppDataSource.getRepository(User).save(user);
//               console.log("Profile edited for user with ID: " + payload.user_id);
//             } else {
//               console.log("User not found for ID: " + payload.user_id);
//             }
//             chanel.ack(message)
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

// export default new ProfileWorker()
