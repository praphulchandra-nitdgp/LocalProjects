import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import Navbar from "./Navbar";
import Footer from './footer';
import './TodoWrapper.css'
import { cleanup } from "@testing-library/react";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [items, setItems] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  /*// add data to local storage
  useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(...todo))
  }, [...todo]);
*/
  return (
    <>
    <nav>
      <Navbar />
      </nav>
    <section className="hero-section">
    <div className="TodoWrapper">
      <h1>let'sDoThis!</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
    </section>
    <div className="footer">
    <Footer/>
    </div>
    </>
  );
};


export default TodoWrapper;