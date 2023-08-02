import { useEffect, useState } from "react";
import ListOfTodos from "./components/ListOfTodos";
import "./App.css";
import { useForm } from "./hooks/useForm";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [values, handleInputChange, reset] = useForm({title: '', description: ''})

  useEffect(() => {
      setTodos(JSON.parse(localStorage.getItem("todos")))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo()
  };

  const addTodo = () => {
    if (values.title.trim() !== "" ) {
      let newItem = { ... values, id: new Date().getTime(), completed: false }; 
      setTodos([...todos, newItem]);
      localStorage.setItem('todos', JSON.stringify([...todos, newItem]))
      reset()
    }
  }

  const onMarkComplete = (id) => {
    const mark = todos.map((todo) => {
      return todo.id === Number(id)
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    })
    setTodos(mark);
    localStorage.setItem('todos', JSON.stringify(mark))
  };

  const onDeleteTodo = (id) => {
    const deleted = [...todos].filter((item) => item.id !== id)
    setTodos(deleted);
    localStorage.setItem('todos', JSON.stringify(deleted))
  };

  return (
    <div className="container">
      <h1>Lista de tareas</h1>

      <div style={{ margin: 10, display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} style={{display: 'flex', gap: 10}}>
          <input 
              name="title" 
              placeholder= "Escribe el título" 
              value={values.title} 
              onChange={handleInputChange} />
          <input 
              name="description" 
              placeholder= "Escribe la descripción" 
              value={values.description} 
              onChange={handleInputChange} />
          <button>Añadir tarea</button>
        </form>
      </div>

      <ListOfTodos
        todos={todos}
        onMarkComplete={onMarkComplete}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  );
};

export default App;

