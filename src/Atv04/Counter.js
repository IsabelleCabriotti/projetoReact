import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Você clicou {count} vezes</h1>
      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}
