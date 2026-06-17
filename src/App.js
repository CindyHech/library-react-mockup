import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/books" element={<Books />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
