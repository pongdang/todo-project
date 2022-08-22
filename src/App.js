import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  useEffect(() => {
    const todoListDataURI = '/todoData.json';
    fetch(todoListDataURI)
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data.todoData);
      });
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue({
      id: todoList.length + 1,
      content: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoValue]);
  };

  return (
    <section>
      <h1>To do</h1>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>추가</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            {todo.content}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
