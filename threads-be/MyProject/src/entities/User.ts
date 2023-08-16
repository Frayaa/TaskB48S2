import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  OneToMany,
  ManyToOne,
} from "typeorm"
import { Thread } from "./Threads"
import { Like } from "./Like"
import { Reply } from "./Reply"
import { Follow } from "./Follows"

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
    onUpdate: "CASCADE",
  })
  threads: Thread[]

  @OneToMany(() => Thread, (thread) => thread.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  likes: Like[]

  @OneToMany(() => Reply, (replies) => replies.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  replies: Reply[]

  @OneToMany(() => Follow, (follow) => follow.follower, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  followers: Follow[]

  @OneToMany(() => Follow, (follow) => follow.followed, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  followings: Follow[]
}
