import { useState } from "react";
import "../styles/TodoListApp.css";
import MyButtonApp from "./MyButtonApp";

interface Todo {
  id: string;
  text: string;
}

const TodoListApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState("");

  const isAddDisabled = todoInput.trim() === "";

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: todoInput.trim(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    setTodoInput("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          name="todoText"
          type="text"
          placeholder="Add a new task..."
          className="todo-input"
          value={todoInput}
          required
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <MyButtonApp
          label="Add"
          className="primary-btn"
          type="submit"
          disabled={isAddDisabled}
        />
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="todo-text">{todo.text}</span>
            <MyButtonApp
              label="Delete"
              className="delete-btn"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
