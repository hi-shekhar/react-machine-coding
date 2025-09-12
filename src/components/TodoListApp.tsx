import { useRef, useState } from "react";
import "../styles/TodoListApp.css";

interface Todo {
  id: number;
  text: string;
}

const TodoListApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    const inputValue = inputRef.current?.value;

    if (!inputValue || inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
