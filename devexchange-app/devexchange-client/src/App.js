// import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Routing from './Routing';
import {fetchAllQuestions} from './actions/question'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions())
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routing />
      </Router>
      
    </div>
  );
}

export default App;
