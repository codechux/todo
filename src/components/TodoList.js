import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todo, setTodo, filteredTodo }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodo.map((td) => (
            <Todo
              td={td}
              setTodo={setTodo}
              todo={todo}
              text={td.text}
              key={td.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
