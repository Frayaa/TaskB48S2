import { ThreadCard } from "@/features/thread/component/ThreadCrad"
import threads from "@/utils/fakedata/threads.json"
import { useState } from "react"

export default function Home() {
  const [thread] = useState(threads)

  return (
    <>
      {thread.map((item, index) => {
        return (
          <ThreadCard
            key={index}
            id={item.id}
            author_full_name={item.author_full_name}
            author_picture={item.author_picture}
            author_username={item.author_username}
            content={item.content}
            posted_at={item.posted_at}
            likes_count={item.likes_count}
            replies_count={item.replies_count}
            image={item.image}
            is_liked={item.is_liked}
          />
        )
      })}
    </>
  )
}
