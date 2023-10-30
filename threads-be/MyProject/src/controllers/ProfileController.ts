import { Request, Response } from "express"
import ProfileService from "../services/ProfileService"

class ProfileController {
  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id)
      const loginSession = res.locals.loginSession

      const response = await ProfileService.findOne(id, loginSession)
      return res.status(200).json(response)
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        err: "Server error",
      })
    }
  }

 async getRandomUser(
    req: Request, res: Response
  ): Promise<Response> {
    try {
const randomUser = await ProfileService.getRandomUser()
return res.status(200).json(randomUser)
} catch(err) {
      console.log
      return res.status(500).json({error: "Internal Server Error"})
    }
  }

  update(req: Request, res: Response) {
    ProfileService.update(req, res)
  }
  find(req: Request, res: Response) {
    ProfileService.find(req, res)
  }
  search(req: Request, res: Response) {
    ProfileService.search(req, res)
  }
}

export default new ProfileController()
