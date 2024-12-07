import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/CounterSlice/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice
  },
});
