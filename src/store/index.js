import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postApi } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(postApi.middleware),
  ],
});

setupListeners(store.dispatch);
