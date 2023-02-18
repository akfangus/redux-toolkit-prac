import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   counter: counter,
// });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    counter: counter,
    //...:...
    //...:...
  },
});

export default store;
