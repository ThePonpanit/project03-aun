import { useState, ChangeEvent } from "react";

interface Todo {
  id: number;
  title: string;
  date: string;
  time: string;
}

function T04() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function genId() {
    return Math.floor(Math.random() * 10000);
  }

  function handleClick() {
    if (todoInput) {
      const currentDate = new Date();
      const date = currentDate.toISOString().split("T")[0];
      const time = currentDate.toTimeString().split(" ")[0];

      const newTodo: Todo = {
        id: genId(),
        title: todoInput,
        date: date,
        time: time,
      };

      setTodos([...todos, newTodo]);
      setTodoInput("");
    }
  }

  function handleDelete(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div>
        <h1>Todos Apps</h1>
        <div>
          <input
            type="text"
            id="todo"
            onChange={handleChange}
            value={todoInput}
          />
          <button className="add-btn" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>

      {todos.map((todo, idx) => (
        <div key={todo.id}>
          ({idx + 1}) 📅{todo.date} ⏰{todo.time} 📰{todo.title}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default T04;
