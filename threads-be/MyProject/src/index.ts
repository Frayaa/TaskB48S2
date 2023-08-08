import { AppDataSource } from "./data-source"
import * as express from "express"
import { Request, Response } from "express"
import router from "./route/threadRoute"

AppDataSource.initialize()
  .then(async () => {
    const app = express()
    const port = 5000

    // const router = express.Router()
    app.use(express.json())

    app.use("/api/v1", router)

    // router.get("/", (req: Request, res: Response) => {
    //   res.send("Hello World")
    // })

    // router.get("/threads", (req: Request, res: Response) => {
    //   res.status(200).json({
    //     message: "Hello",
    //   })
    // })

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  })

  .catch((error) => console.log(error))
