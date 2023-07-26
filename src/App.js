import { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';

const App = () => {
  const course = 'Half Stack application development';

  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  //  console.log('rendering...', counter);
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <Header course={course} />
      <Content />
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  );
};

export default App;
