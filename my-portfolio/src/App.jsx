import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // Import Footer
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <NavBar />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here */}
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
