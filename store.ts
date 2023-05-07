import { configureStore } from "@reduxjs/toolkit";
// import linksSlice from "../slices/linksSlice";
import linksReducer from "./src/redux/slices/linksSlice";

const store = configureStore({
  reducer: {
    //links: linksSlice,
    links: linksReducer,
  },
});

export default store;
