import { AppDataSource } from "./data-source"
import * as express from "express"
import { Request, Response } from "express"
import * as cors from 'cors'
import router from "./routes/routes"
import 'dotenv/config' 
import ThreadWorker from "./workers/ThreadWorker"


// const threadRoute = require("./routes/threadRoute")
// const AuthRoute = require("./routes/AuthRoute")


AppDataSource.initialize()
  .then(async () => {
    const app = express()
    const port = 5000


    // const router = express.Router()
    app.use(express.json())

    app.use(cors())

    app.use("/api/v1", router)
    app.use("/uploads", express.static("uploads"))
 
    // ThreadWorker()

    // router.get("/", (req: Request, res: Response) => {
    //   res.send("Hello World")
    // })

    // router.get("/threads", (req: Request, res: Response) => {
    //   res.status(200).json({
    //     message: "Hello",
    //   })
    // })

    app.listen(port, async () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  })

  .catch((error) => console.log(error))
