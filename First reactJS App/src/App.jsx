import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Eventdemo from "./Eventdemo";
import Counter from "./Counter";
import Sum from "./sumdemo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>App</h1>
        <Link to="/Home">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Contact">Contact</Link>
        <br />
        <Link to="/Eventdemo">Event Demo</Link>
        <br />
        <Link to="/Counter">Counter</Link>
        <br />
        <Link to="/Sum">Sum</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Eventdemo" element={<Eventdemo />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Sum" element={<Sum />} />
          <Route path="/Cake/Ahmedabad" element={<h1>Ahmedabad cake</h1>} />
          <Route path="/Cake/Vadodara" element={<h1>Vadodara cake</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
