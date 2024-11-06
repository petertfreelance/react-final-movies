import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/movies/" element={<Movies />}></Route>
          <Route path="/movies/:filter" element={<Movies />}></Route>
          {/* <Route path="/movies/movie/:id" element={<Movieinfo />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
