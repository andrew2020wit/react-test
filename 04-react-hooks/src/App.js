import React, { useEffect, useState } from "react";
import "./App.css";

function Example() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>AppReactHooks</h1>
      <Example />
    </div>
  );
}

export default App;
