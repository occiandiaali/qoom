import { configureStore } from "@reduxjs/toolkit";
import linksSlice from "../slices/linksSlice";

export const store = configureStore({
  reducer: {
    links: linksSlice,
  },
});
