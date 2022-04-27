import React from "react";

const Todo = ({ text, td, todo, setTodo }) => {
  const deleteHandler = () => {
    setTodo(todo.filter((el) => el.id !== td.id));
  };

  const completeHander = () => {
    setTodo(
      todo.map((el) => {
        if (el.id === td.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`"todo-item" ${td.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHander} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
