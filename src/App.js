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

    const antecedotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.',
    ];

    const [selected, setSelected] = useState(antecedotes[0]);
    const [voteCounts, setVoteCounts] = useState(Array(antecedotes.length).fill(0));

    const handleShow = () => {
      setSelected(getRandomItemFromArray(antecedotes));
    }

    // fucntion to handle when the vote button is clicked
    const handleVote = () => {
      const index = antecedotes.indexOf(selected);

      if (index !== -1) {
        const updatedCounts = [...voteCounts];

        updatedCounts[index] += 1;
        setVoteCounts(updatedCounts);
        console.log(updatedCounts[index]);
      }
    };

    function getRandomItemFromArray(array) {
      // Generate a random index within the array length
      const randomIndex = Math.floor(Math.random() * array.length);

      // Return the item at the random index
      return array[randomIndex];
    }

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
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>

        <div>
          <h3>Summary of feedbacks</h3>
          <div>Total: {good + neutral + bad}</div>
          <div>Average: {(good + neutral + bad) / 3}</div>
          <div>Positive: {good / total}</div>
        </div>
      </div>
      <hr />
      <h4 className='mb-3 border border-3 p-1 rounded-2 bg-dark-subtle mb-2 d-inline-block'>{selected}</h4>
      <p className=' bg-dark-subtle p-2 d-inline-block rounded-2'>Votes: {voteCounts[antecedotes.indexOf(selected)]}</p>
      <div className='d-flex'>
        <Button onClick={handleVote}>vote</Button>

        <Button onClick={handleShow}>next antecedote</Button>
      </div>
    </div>
  );
};

export default App;
