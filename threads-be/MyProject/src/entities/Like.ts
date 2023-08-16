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
  
  @Entity({ name: "likes" })
  export class Like {
    @PrimaryGeneratedColumn()
    id: number
  
    
    @ManyToOne(() => Thread, (thread) => thread.likes, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
    thread: Thread

    @ManyToOne(() => User, (user) => user.likes, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
    user: User
  }