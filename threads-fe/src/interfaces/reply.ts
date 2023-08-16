import { IUser } from "./thread"

export interface IReply {
  id?: number
  content?: string
  user: IUser
}

export interface IReplyPost {
  content: string
}
