import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm"

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

}
