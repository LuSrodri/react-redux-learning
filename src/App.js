

import './App.css';
import Card from './components/card';
import Interval from './components/interval';

function App() {
  return (
    <div className="App">
      <h1>React Redux Learning</h1>
      <div className='row'>
        <Interval> ONE</Interval>
      </div>
      <div className='row'>
        <Card title="Card #02" blue> TWO</Card>
        <Card title="Card #03" green> Three</Card>
        <Card title="Card #04" purple> Four</Card>
      </div>
    </div>
  );
}

export default App;
