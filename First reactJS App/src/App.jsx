// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Eventdemo from "./Eventdemo";
import Counter from "./Counter";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Eventdemo" element={<Eventdemo />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Cake/Ahmedabad" element={<h1>Ahmedabad cake</h1>} />
          <Route path="/Cake/Vadodara" element={<h1>Vadodara cake</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;