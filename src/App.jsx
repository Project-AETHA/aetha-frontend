import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginContext from './assets/contexts/LoginContext.jsx'

//* Importing components
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import LoginPage from "./assets/pages/LoginPage";
import SignupPage from "./assets/pages/SignupPage";
import UserList from "./assets/pages/UserList";
import LoginPageNew from "./assets/pages/LoginPage2.jsx";
import LoginPage3 from "./assets/pages/LoginPage3.jsx";


function App() {
  
  return (
      <Router>
        <div className="app w-full bg-white h-full">
          <Navbar />
          <LoginContext />
          <div className="content flex flex-col w-full h-full justify-center items-center">
            <Routes>
              <Route exact path="/" element={<div> Landing Page </div>} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/login" element={<LoginPage3/>} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/all-users" element={<UserList />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
