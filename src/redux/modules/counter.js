import { createSlice } from "@reduxjs/toolkit";

//Action value
// const ADD_NUMBER = "ADD_NUMBER";
// const MINUS_NUMBER = "MINUS_NUMBER";

//action creator
// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload,
//   };
// };
// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload,
//   };
// };

//initial state
// const initialState = {
//   num: 0,
// };

//reducer
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         ...state,
//         num: state.num + action.payload,
//       };
//     case MINUS_NUMBER:
//       return {
//         ...state,
//         num: state.num - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default counter

//initial state
const initialState = {
  num: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.num = state.num + action.payload;
    },
    minusNumber: (state, action) => {
      state.num = state.num - action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { addNumber, minusNumber } = counterSlice.actions;
