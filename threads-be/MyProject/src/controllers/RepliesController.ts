import { Request, Response } from "express"
import AuthService from "../services/AuthService"
import RepliesService from "../services/RepliesService"

class RepliesController {
  async find(req: Request, res: Response) {
    try {
      const response = await RepliesService.find(req.query)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: "Server Error",
      })
    }
  }
  async create(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession
      const response = await RepliesService.create(req.body, loginSession)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: err,
      })
    }
  }
}

export default new RepliesController()
