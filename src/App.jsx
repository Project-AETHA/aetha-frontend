import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Reading from "./pages/Reading";
import ViewAllBooks from "./pages/ViewAllBooks"
import Novels from "./pages/Novels";
import Footer from "./components/Footer";
import Poems from "./pages/Poems";
import UserManagement from "./pages/UserManagement";
import UserM from "./pages/UserM";

function App() {
  return (
      <Router>
        <Navigation />

        <div className="content">
            <Routes>
              <Route exact path="/" element={<div> Landing Page </div>} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/reading" element={<Reading />} />
              <Route exact path="/novels" element={<Novels />} />
              <Route path="/poems" element={<Poems />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/usermanagement" element={<UserManagement/>}/>
              <Route path="/userm" element={<UserM/>}/>
            </Routes>
          </div>

          <Footer />
      </Router>
  );
}

export default App;
