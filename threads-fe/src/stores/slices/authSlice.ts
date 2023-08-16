import { IAUTH } from "@/interfaces/user"
import { setAuthToken } from "@/lib/api"
import { createSlice } from "@reduxjs/toolkit"

const initialAuthState: { data: IAUTH } = {
  data: {
    id: 0,
    full_name: "",
    username: "",
    email: "",
    profile_picture: "",
    description: "",
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      const payload = action.payload
      setAuthToken(payload.token)
      localStorage.setItem("token", payload.token)

      state.data.id = payload.user.id
      state.data.full_name = payload.user.full_name
      state.data.username = payload.user.username
      state.data.email = payload.user.email
      state.data.profile_picture = payload.user.profile_picture
      state.data.description = payload.user.description
    },
    AUTH_CHECK: (state, action) => {
      const payload = action.payload
      // localStorage.setItem("token", payload.token)
      state.data = payload
    },
    AUTH_ERROR: (state) => {
      localStorage.removeItem("token")
      state.data.id = 0
      state.data.full_name = ""
      state.data.username = ""
      state.data.email = ""
    },
    AUTH_LOGOUT: (state) => {
      localStorage.removeItem("token")
      state.data.id = 0
      state.data.full_name = ""
      state.data.username = ""
      state.data.email = ""
    },
  },
})
