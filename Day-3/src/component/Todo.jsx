import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItems";

function Todo() {
  const [todos, setTodos] = React.useState([]);

  const handleTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: Date.now() + text + Math.random(),
    };

    const AfterAddTodoList = [...todos, newItem];

    setTodos(AfterAddTodoList);
  };

  const handleToggle = (id) => {
    const AfterToggle = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(AfterToggle);
  };

  const handleDelete = (id) => {
    const AfterDeletion = todos.filter((todo) => todo.id !== id);
    setTodos(AfterDeletion);
  };

  return (
    <div>
      <AddTodo handleTodo={handleTodo} />
      <div>
        {todos.map((todo) => (
          <TodoItems
            key={todo.id}
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
