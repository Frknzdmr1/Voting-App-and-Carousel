import { useState } from 'react';

import './App.css';

function App() {
const[counter, myFunction] = useState(0)

  const handleIncrease = () => {
    myFunction(counter+1)
  }

  const handleDecrease = () => {
    myFunction(counter > 0 ? counter-1 : 0)

 }

  function handleReset () {
    myFunction(0)
  }

  return (
    <div className="App">
      <h3>{counter}</h3>

      <div className='buttonGroup'>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>Reset</button>
    </div>  
      </div>
  );
}

export default App;
