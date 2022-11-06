import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './button';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<NavBar/>} />
      </Routes>
    </Router>
  );
}

export default App;
