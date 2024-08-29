// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Routing from './Routing';

function App() {
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
