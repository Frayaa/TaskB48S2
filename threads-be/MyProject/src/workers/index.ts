import { error } from "console"
import { AppDataSource } from "../data-source"
import cloudinaryConfig from "../libs/config"
import * as amqp from "amqplib"
import ThreadWorker from "./ThreadWorker"

class WorkerHub {
constructor(){
    AppDataSource.initialize()
    .then(async () => {
        cloudinaryConfig()
        const connection = await amqp.connect("amqp://localhost")
        ThreadWorker.create("threads-queue", connection)
    })
    .catch((error) => console.log(error))
}
}

export default new WorkerHub()