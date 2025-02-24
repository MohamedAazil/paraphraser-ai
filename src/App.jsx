import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
};

export default App;
