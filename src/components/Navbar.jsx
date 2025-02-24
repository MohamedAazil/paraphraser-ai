import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-slate-100">
      <div className="flex gap-2 items-center">
        <p className="font-bold text-2xl font-serif">Paraphraser</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="bg-black py-2 px-6 text-white rounded-full hover:scale-105">Sign Up</button>
        {/* <img src="#" alt="Accimage" className=""/> */}
      </div>
    </div>
  );
};

export default Navbar;
