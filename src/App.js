import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OptionalChallenge from "./pages/Optional";
import Example from "./component"

function App() {
  return (
    <div className="App">
      <Router>
        <Example />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/optional" element={<OptionalChallenge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
