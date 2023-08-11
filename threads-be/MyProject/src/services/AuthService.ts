import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { User } from "../entities/User"
import { loginSchema, registerSchema } from "../utils/validators/user"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

class AuthService {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User)

  async register(req: Request, res: Response) {
    try {
      const data = req.body

      const { error, value } = registerSchema.validate(data)

      if (error) {
        return res.status(400).json({
          error: error.details[0].message,
        })
      }

      const checkEmail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
      })

      if (checkEmail) {
        return res.status(400).json("Email Already Use")
      }

      const hashPassword = bcrypt.hashSync(value.password, 10)

      const register = await this.authRepository.create({
        full_name: value.full_name,
        username: value.username,
        email: value.email,
        password: hashPassword,
      })

      const userRegister = this.authRepository.save(register)
      return res.status(200).json(register)
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = req.body

      const { error, value } = loginSchema.validate(data)

      if (error) {
        return res.status(400).json({
          error: error.details[0].message,
        })
      }

      const checkEmail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
        select: ["full_name", "username", "email", "password"],
      })

      if (!checkEmail) {
        return res.status(400).json("Email/Password is wrong")
      }

      const isPasswordValid = bcrypt.compareSync(
        value.password,
        checkEmail.password
      )

      if (!isPasswordValid) {
        return res.status(400).json("Email/Password is wrong")
      }

      const user = await this.authRepository.create({
        id: checkEmail.id,
        full_name: checkEmail.full_name,
        email: checkEmail.email,
      })

      const token = jwt.sign({ user }, "password", { expiresIn: "1h" })

      return res.status(200).json({
        user,
        token,
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      })
    }
  }
}

export default new AuthService()
