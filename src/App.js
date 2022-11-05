import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </Router>
  );
}

export default App;
