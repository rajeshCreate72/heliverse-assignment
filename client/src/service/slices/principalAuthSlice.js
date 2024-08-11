import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("authToken") || null,
    isAuthenticated: !!sessionStorage.getItem("authToken"),
    userEmail: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("authToken", action.payload);
    },
    getMail: (state, action) => {
      state.userEmail = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("authToken");
    },
  },
});

export const { login, logout, getMail } = authSlice.actions;
export default authSlice.reducer;
