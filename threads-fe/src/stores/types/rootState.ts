import { IAUTH } from "@/interfaces/user";
import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";

export interface RootState {
  auth: {
    data: IAUTH
  }


}
  const rootReducer = combineReducers({
auth: authSlice.reducer
  })

export default rootReducer;
