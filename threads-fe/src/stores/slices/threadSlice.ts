import { IThreadCard } from "@/interfaces/thread"
import { createSlice } from "@reduxjs/toolkit"

const initialThreadState: { threads: IThreadCard[] } = { threads: [] }

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialThreadState,
  reducers: {
    GET_THREADS: (state, action) => {
      state.threads = action.payload
    },

    LIKE_THREADS: (
      state,
      aciton: {
        payload: { id: number; isLiked: boolean }
      }
    ) => {
      const { id, isLiked } = aciton.payload

      state.threads = state.threads.map((thread) => {
        if (thread.id === id) {
          return {
            ...thread,
            like_count: isLiked
              ? thread.likes_count + 1
              : thread.likes_count - 1,
            is_liked: !isLiked,
          }
        }
        return thread
      })
    },
  },
})
