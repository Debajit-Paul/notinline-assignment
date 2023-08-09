import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" w-screen">
      <header>
        <Navbar />
      </header>
      <Main />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
