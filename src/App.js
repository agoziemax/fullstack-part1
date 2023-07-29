import { useState } from 'react';
import './App.css';
// import Content from './Content';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Display from './Display';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  // const [allClicks, setAll] = useState([]);
  // const [total, setTotal] = useState(0);
  // console.log(allClicks)

  // const course = 'Half Stack application development';

  // const [counter, setCounter] = useState(0);

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'));
  //   setLeft(left + 1);
  //     setTotal(left + right);
  // };

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'));
  //   setRight(right + 1);
  //   setTotal(left + right);
  // };

  // const increaseByOne = () => {
  //   setCounter(counter + 1)
  //   console.log('increasing, value before', counter);
  // };
  // const decreaseByOne = () => {
  //   setCounter(counter - 1)

  // };

  // const setToZero = () => {
  //   setCounter(0)

  // };
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => {
      setGood(good + 1);
      console.log('hi')
    };

    const handleNeutral = () => {
      setNeutral(neutral + 1);

    };

    const handleBad = () => {
      setBad(bad + 1);
    };

    const total = good + neutral + bad;


  return (
    <div className='p-4'>
      {/* <Header course={course} />
      <Content />
      <Display counter={counter} />
      <Button handleClick={increaseByOne}>Plus</Button>
      <Button handleClick={setToZero}>Zero</Button>
      <Button children='Minus' handleClick={decreaseByOne} />
      <hr />

      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' , ')}</p>
      <p>total {total}</p> */}

      <Header course='Feedback Portal' />
      <div className=''>
        <Button children='good' onClick={handleGood}></Button>
        <Button children='neutral' onClick={handleNeutral}></Button>
        <Button children='bad' onClick={handleBad}></Button>

        <div className='mb-4'>
          <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>

        <div>
          <h3>Summary of feedbacks</h3>
          <div>Total: {good + neutral + bad}</div>
          <div>Average: {(good + neutral + bad)/3}</div>
          <div>Positive: {(good/total)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
