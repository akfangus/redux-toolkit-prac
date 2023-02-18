import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//2개의  input
//1. 이름 : 의미없음
//2. 함수
//thunk 중간에 뭘 실행시키기 위해서
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  //여기도 인자 두개 payload, 내장 객체
  (payload, thunkAPI) => {
    //수행동작 입력
    setTimeout(() => {
      thunkAPI.dispatch(payload);
    }, 3000);
  }
);
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
