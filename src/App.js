import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./Home/Home";
import NavBar from './button';
import About from './Home/About';
import WriteReview from './Home/WriteReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<NavBar/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/submit_review" element={<WriteReview/>} />
      </Routes>
    </Router>
  );
}

export default App;
