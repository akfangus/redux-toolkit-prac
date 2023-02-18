import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "./axios/api";
import { __addNumber } from "./redux/modules/counter";

function App() {
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [todos, setTodos] = useState(null);

  const number = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();

  const onPlusButtonClickHandler = () => {
    // dispatch(addNumber(1));
    dispatch(__addNumber(addNumber(1)));
  };
  const onMinusButtonClickHandler = () => {
    dispatch(minusNumber(1));
  };

  const fetchTodos = async () => {
    //await 안넣으면 응답받기 전의 promise가 나옴
    // const response = await axios.get("http://localhost:4000/todos");
    // const { data } = await axios.get("http://localhost:4000/todos");
    const { data } = await api.get("/todos");
    console.log("data", data);
    setTodos(data);
  };

  //가장 마지막에 실행되니깐 todos가 null인상태로 return이 되겠지?
  useEffect(() => {
    //최초 마운트될때 DB에서 값 가져옴
    fetchTodos();
    //언마운트될때 실행
    // return () => {};
  }, []);

  const postTodo = async () => {
    // axios.post("http://localhost:4000/todos", inputValue);
    api.post("/todos", inputValue);
    fetchTodos();
  };
  const onSubminHandler = (e) => {
    e.preventDefault();

    //submit시에 input에 들어있는 값을(state) 이용해서 DB에 저장(post)
    postTodo();
    // setTodos([...todos, inputValue]);
  };

  const onDeleteButtonClickHandler = async (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>{number}</h1>

      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div>
        {/* 데이터영역 */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;
              <button onClick={() => onDeleteButtonClickHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>

      <div>{/* input영역 */}</div>
      <form onSubmit={onSubminHandler}>
        <input
          type="text"
          value={inputValue.title}
          onChange={(e) => setInputValue({ title: e.target.value })}
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
