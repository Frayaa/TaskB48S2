import { Request, Response } from "express"
import FollowsService from "../services/FollowsService"

class FollowsController {
  async find(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession
      const limit = (req.query.limit ?? 0) as number
      const type = (req.query.type ?? "") as string

      const response = await FollowsService.find(loginSession, type, limit)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ err: err.message })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession

      const response = await FollowsService.create(req.body, loginSession)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ err: err.message })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession
      const followUserId = parseInt(req.params.followed_user_id)

      const response = await FollowsService.delete(followUserId, loginSession)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ err: err.message })
    }
  }
}

export default new FollowsController()
