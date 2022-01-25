

import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <h1>React Redux Learning</h1>
      <div className='row'>
        <Card title="Card #01" red> ONE</Card>
        <Card title="Card #02" blue> TWO</Card>
        <Card title="Card #03" green> Three</Card>
        <Card title="Card #04" purple> Four</Card>
      </div>
      <div className='row'>
      </div>
    </div>
  );
}

export default App;
