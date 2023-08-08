import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm"

@Entity({ name: "threads" })
export class Thread {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  full_name: string

  @Column()
  username: string

  @Column()
  content: string

  @Column()
  like: number

  @Column()
  replies: number

  @Column({ nullable: true })
  image: string

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  posted_at: Date

}
