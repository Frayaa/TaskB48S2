export interface IUser {
    id?: number
    full_name?: string
    username?: string
    email?: string
    profile_picture?: string
    user_id?: number
    is_followed?: boolean
  }
  
  export interface IThreadCard {
    //mirip struct golang
    id: number
    user?: IUser
    posted_at?: string
    content?: string
    likes_count: number
    replies_count?: number // bisa gini juga string | number
    image: string
    is_liked: boolean
  }

  export interface IThreadPost {
    content: string
    image?: MediaSource | Blob | string
  }
  