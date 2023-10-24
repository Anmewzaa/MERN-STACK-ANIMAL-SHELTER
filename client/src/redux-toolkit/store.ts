import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// slices
import userReducer from "./slices/userSlice";

const reducer = {
  userReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
