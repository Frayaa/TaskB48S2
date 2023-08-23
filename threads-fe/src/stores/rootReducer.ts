import { combineReducers } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"
import { threadSlice } from "./slices"

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } =
  authSlice.actions
export const { GET_THREADS, LIKE_THREADS } = threadSlice.actions

export const authReducer = authSlice.reducer
export const threadReducer = threadSlice.reducer

const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
})

export default rootReducer
