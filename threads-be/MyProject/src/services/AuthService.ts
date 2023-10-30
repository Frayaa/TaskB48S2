import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { User } from "../entities/User"
import { loginSchema, registerSchema } from "../utils/validators/user"
import jwt = require ("jsonwebtoken")
import bcrypt = require ("bcrypt")

class AuthService {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User)

  async register(reqBody: any): Promise<any> {
    try {
      const data = reqBody

      const { error, value } = registerSchema.validate(data)

      if (error) {
        throw new Error(error.details[0].message)
      }

      const checkEmail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
      })

      if (checkEmail) {
        throw new Error("Email Already Use")
      }

      const hashPassword = bcrypt.hashSync(value.password, 10)

      const register = this.authRepository.create({
        full_name: value.full_name,
        username: value.username,
        email: value.email,
        password: hashPassword,
      })

      this.authRepository.save(register)
      return {
        register,
      }
    } catch (err) {
      throw new Error("Server error")
    }
  }

  async login(reqBody: any): Promise<any> {
    try {
      const data = reqBody

      const { error, value } = loginSchema.validate(data)

      if (error) {
        throw new Error(error.details[0].message)
      }

      const checkEmail = await this.authRepository.findOne({
        where: {
          email: value.email,
        },
        select: [
          "id",
          "full_name",
          "username",
          "email",
          "password",
          "profile_picture",
          "description",
        ],
      })

      if (!checkEmail) {
        throw new Error("Email/Password is wrong")
      }

      const isPasswordValid = bcrypt.compareSync(
        value.password,
        checkEmail.password
      )

      if (!isPasswordValid) {
        throw new Error("Email/Password is wrong")
      }

      const user = this.authRepository.create({
        id: checkEmail.id,
        full_name: checkEmail.full_name,
        username: checkEmail.username,
        email: checkEmail.email,
        profile_picture: checkEmail.profile_picture,
        description: checkEmail.description,
      })

      const token = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      })

      return {
        user,
        token,
      }
    } catch (err) {
      throw new Error("Server error")
    }
  }

  async check(loginSession: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        where: {
          email: loginSession.user.email,
        },
      })
      return {
        user,
        message: "Token is valid",
      }
    } catch (err) {
      throw new Error("Server error")
    }
  }
}

export default new AuthService()
