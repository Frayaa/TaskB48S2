import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from "typeorm"
import { User } from "./User"
import { Thread } from "./Threads"

@Entity({ name: "replies" })
export class Reply {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @ManyToOne(() => User, (user) => user.replies, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User

  @ManyToOne(() => Thread, (thread) => thread.replies, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  thread: Thread
}
