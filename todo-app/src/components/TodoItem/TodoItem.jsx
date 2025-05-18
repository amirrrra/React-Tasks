function TodoItem({ todo, toggle, deleteTodo }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={toggle}>✅</button>
      <button onClick={deleteTodo}>❌</button>
    </div>
  );
}

export default TodoItem;
