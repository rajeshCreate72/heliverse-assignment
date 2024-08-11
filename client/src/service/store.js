import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/principalAuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
