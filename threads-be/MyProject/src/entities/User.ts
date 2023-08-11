import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  OneToMany,
} from "typeorm"
import { Thread } from "./Threads"

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
}
