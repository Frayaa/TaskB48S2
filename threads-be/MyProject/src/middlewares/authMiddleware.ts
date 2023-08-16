import { NextFunction, Request, Response } from "express"
import * as jwt from "jsonwebtoken"

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(400).json({
      error: "Unauthorized",
    })
  }

  const token = authorizationHeader.split(" ")[1]

  try {
    const loginSession = jwt.verify(token, process.env.SECRET_KEY)
    res.locals.loginSession = loginSession
    next()
  } catch (err) {
    return res.status(400).json({
      error: "Unauthorized",
    })
  }
}

export default authenticate
