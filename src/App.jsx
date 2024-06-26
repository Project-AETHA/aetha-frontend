import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Reading from "./pages/Reading";
import ViewAllBooks from "./pages/ViewAllBooks"
import Novels from "./pages/Novels";
import Footer from "./components/Footer";
import AuthorDashboard from "./pages/AuthorDashboard";


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
              <Route exact path="/authordashboard" element={<AuthorDashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>

          <Footer />
      </Router>
  );
}

export default App;
