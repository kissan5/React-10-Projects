import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CameraApp from "./components/CameraApp/CameraApp";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Private from "./components/Private";
import AdminLayout from "./components/AdminLayout";
import Contact from "./Pages/Contact/Contact";

function App() {
  const location = useLocation();

  // Set condition for pages with and without extra space under the header
  const isSpacedLayout = !["/signin", "/signup", "/forgot-password"].includes(location.pathname);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className={isSpacedLayout ? "content spaced-content" : "content"}>
        <Routes>
          <Route element={<Private />}>
            <Route path="/camera" element={<CameraApp />} />
            <Route path="/adminlayout/*" element={<AdminLayout />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
