import { Request, Response } from "express"
import AuthService from "../services/AuthService"

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const response = await AuthService.register(req.body)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: "Server error",
      })
    }
  }
  async login(req: Request, res: Response) {
    try {
      const response = await AuthService.login(req.body)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: "Server error",
      })
    }
  }
  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession
      const response = await AuthService.check(loginSession)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: "Server error",
      })
    }
  }
}

export default new AuthController()
