import "reflect-metadata"
import { DataSource } from "typeorm"
import { Thread } from "./entities/Threads"
import { Follow } from "./entities/Follows"
import { Like } from "./entities/Like"
import { Reply } from "./entities/Reply"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "monorail.proxy.rlwy.net",
  port: 36480,
  username: "postgres",
  password: "E-cGD2bD*6ddCd4aF5b1*BbE53DAE*6-",
  database: "db_threads_be",
  synchronize: true,
  logging: false,
  entities: [Follow, Thread, Like, Reply, User],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
})
