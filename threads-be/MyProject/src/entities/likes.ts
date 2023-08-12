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
  
    
    @ManyToOne(() => User, (user) => user.like, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
    user: User[]

    @ManyToMany(() => Thread, (thread) => thread.like, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
    thread: Thread[]
  }
