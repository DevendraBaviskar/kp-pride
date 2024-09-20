import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <div className="content">
        <Outlet />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
