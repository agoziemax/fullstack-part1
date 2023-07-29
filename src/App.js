import { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Display from './Display';

const App = () => {
  const course = 'Half Stack application development';

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <Header course={course} />
      <Content />
      <Display counter={counter}/>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default App;
