
export interface ILogin {
  email: string
  password: string
}

export interface IRegister {
  full_name: string
  username: string
  email: string
  password: string
}

export interface IAUTH {
  id: number
  full_name: string
  username: string
  email: string
  profile_picture: string
  description: string
}
export interface IProfile {
  full_name: string
  username: string
  profile_picture: MediaSource | Blob | string
  description: string
}

