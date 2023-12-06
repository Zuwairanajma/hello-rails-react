import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetingReducer";
const store = configureStore({
  reducer: {
    greetings: greetingSlice,

  }
});

export default store;