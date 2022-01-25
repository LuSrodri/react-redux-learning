

import './App.css';
import Card from './components/card';
import Interval from './components/interval';
import Avg from './components/avg';
import Sum from './components/sum';
import RandomNumber from './components/random';
import { useState } from 'react';

function App() {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>React Redux Learning</h1>
      <div className='row'>
        <Interval min={min} max={max} onChangeMin={setMin} onChangeMax={setMax}></Interval>
      </div>
      <div className='row'>
        <Avg min={min} max={max}></Avg>
        <Sum min={min} max={max}></Sum>
        <RandomNumber min={min} max={max}></RandomNumber>
      </div>
    </div>
  );
}

export default App;
