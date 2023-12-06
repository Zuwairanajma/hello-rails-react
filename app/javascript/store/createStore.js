import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetingReducer";
const store = configureStore({
  reducer: {
    greeting: greetingSlice,

  }
});

export default store;