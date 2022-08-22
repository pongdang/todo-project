import React, { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoListDataURI = '/todoData.json';
    fetch(todoListDataURI)
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data.todoData);
      });
  }, []);

  return (
    <section>
      <h1>To do</h1>
      <input />
      <button>추가</button>
      <ul>
        {todoList.map((todo) => (
          <React.Fragment key={todo.id}>
            <li>
              <input type="checkbox" />
              {todo.content}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}

export default App;
