import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  OneToMany,
 
  ManyToOne,
} from "typeorm"
import { Thread } from "./Threads"
import { Like } from "./likes"

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  full_name: string

  @Column()
  email: string

  @Column({ select: false })
  password: string

  @Column({ nullable: true })
  profile_picture: string

  @Column({ nullable: true })
  description: string

  @OneToMany(() => Thread, (thread) => thread.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  thread: Thread[]

  @OneToMany(() => Like, (like) => like.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  like: Like[]
}
