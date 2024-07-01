import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Reading from "./pages/Reading";
import Novels from "./pages/Novels";
import Footer from "./components/Footer";
import Poems from "./pages/Poems";
import SupportPage from "./pages/Support/SupportPage.jsx";
import AuthorDashboard from "./pages/AuthorDashboard";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<div>Landing Page</div>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/reading" element={<Reading />} />
          <Route exact path="/novels" element={<Novels />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/authordashboard" element={<AuthorDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
