const TodoItem = ({ todo, onMarkComplete, onDeleteTodo }) => {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      margin: "5px",
      padding: "5px",
      marginBottom: "-4px",
    };
  };

  return (
    <div style={getStyle()} className="box">
      <div  style={{display: 'flex', gap: 10}}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onMarkComplete(todo.id)}
        />
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      </div>
      <button className="add-btn" onClick={() => onDeleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
