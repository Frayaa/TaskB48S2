import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from "typeorm"
import { User } from "./User"
import { Like } from "./Like"
import { Reply } from "./Reply"

@Entity({ name: "threads" })
export class Thread {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @Column({ nullable: true })
  image: string

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  posted_at: Date

  @ManyToOne(() => User, (user) => user.threads, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User

  @OneToMany(() => Like, (like) => like.thread, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  likes: Like[]
  @OneToMany(() => Reply, (replies) => replies.thread, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  replies: Reply[]
}
