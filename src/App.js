import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";
import "./App.css";

function App() {
  const number = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();

  const onPlusButtonClickHandler = () => {
    dispatch(addNumber(1));
  };
  const onMinusButtonClickHandler = () => {
    dispatch(minusNumber(1));
  };
  return (
    <div className="App">
      <h1>{number}</h1>

      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
    </div>
  );
}

export default App;
