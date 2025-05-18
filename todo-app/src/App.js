import { useState } from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import TodoInput from './components/TodoInput/TodoInput';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, done: false }]);
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>📝 To-Do App</h2>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggle={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default App;