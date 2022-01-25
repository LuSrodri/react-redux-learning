

import './App.css';
import Card from './components/card';
import Interval from './components/interval';
import Avg from './components/avg';
import Sum from './components/sum';
import RandomNumber from './components/random';

function App() {

  return (
    <div className="App">
      <h1>React Redux Learning</h1>
      <div className='row'>
        <Interval></Interval>
      </div>
      <div className='row'>
        <Avg></Avg>
        <Sum></Sum>
        <RandomNumber></RandomNumber>
      </div>
    </div>
  );
}

export default App;
