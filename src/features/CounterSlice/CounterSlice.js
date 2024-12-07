import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      
      state.value++;
    },
    
    decrement: (state) => {
      
      state.value--;
      if(state.value <= 0){
        state.value=0
      }
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
