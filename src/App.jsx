import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-[300px]:w-full">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
};

export default App;
