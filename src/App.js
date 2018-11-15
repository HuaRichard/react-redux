import { useState } from 'react';
import React from 'react';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter
        value={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)} />
    </div>
  )
}

export default App;
