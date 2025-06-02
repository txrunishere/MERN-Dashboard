import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthSliceType, UserType } from "../../types/types";

const initialState: AuthSliceType = {
  status: false,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      console.log({ data: action.payload });
      state.status = true;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.status = false;
      state.userInfo = null
      localStorage.removeItem("userInfo")
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
