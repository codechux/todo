import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodo, setFilteredTodo] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todo.filter((td) => td.completed === true));
        break;
      case "uncompleted":
        setFilteredTodo(todo.filter((td) => td.completed === false));
        break;
      default:
        setFilteredTodo(todo);
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todo, status]);

  const saveLocal = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const getLocal = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"));
      setTodo(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Chux's Todo List</h1>
      </header>
      <Form
        todo={todo}
        setTodo={setTodo}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filteredTodo={filteredTodo} setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
