import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Routing from './Routing';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

const AppContent = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {/* {location.pathname !== '/auth' && location.pathname !== '/AskQuestion' && location.pathname!=='/Tags' && <Navbar />} */}
      <Routing />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
