
import './App.css';
import Content from './Content';
import Header from './Header';

const App = () => {
  const course = 'Half Stack application development';


  return (
    <div>
      <Header course ={course}/>
      <Content/>
    </div>
  );
};

export default App;