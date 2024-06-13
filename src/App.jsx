import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//* Importing components
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import LoginPage from "./assets/pages/LoginPage";
import SignupPage from "./assets/pages/SignupPage";


function App() {
  return (
      <Router>
        <div className="app w-full bg-white h-full">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<div> Landing Page </div>} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
