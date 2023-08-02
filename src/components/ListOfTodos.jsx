import TodoItem from "./TodoItem";

export default function ListOfTodos({ todos, onMarkComplete, onDeleteTodo }) {
    
  return (
    <div className="items">
      {todos?.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          onMarkComplete={onMarkComplete}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}
