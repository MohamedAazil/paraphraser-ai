import React from "react";
import reactLogo from '../assets/react.svg';
const Steps = () => {
  return (
    <div className="flex gap-4 flex-col mt-2 justify-center items-center w-2/3">
      <h1 className="text-4xl font-semibold">Steps</h1>
      <div className="flex flex-col justify-center items-center gap-6 px-6 py-2.5 w-2/3">
        <div className="flex gap-6 w-2/3 bg-slate-50 py-2 px-6 rounded-xl hover:scale-105 hover:bg-slate-100 transition-all duration-500">
          <img src={reactLogo} alt="" className="" />
          <div className="">
            <h2 className="text-xl font-medium">Enter Text</h2>
            <p className="text-gray-600">
              Type or paste your text into the input box to get started.
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-2/3 bg-slate-50 py-2 px-6 rounded-xl hover:scale-105 hover:bg-slate-100 transition-all duration-500">
          <img src={reactLogo} alt="" className="" />
          <div className="">
            <h2 className="text-xl font-medium">Select Tone</h2>
            <p className="text-gray-600">
              Choose a tone to match your desired writing style, such as
              Standard, Fluent, or Professional.
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-2/3 bg-slate-50 py-2 px-6 rounded-xl hover:scale-105 hover:bg-slate-100 transition-all duration-500">
          <img src={reactLogo} alt="" className="" />
          <p className="">
            <h2 className="text-xl font-medium">Paraphrase</h2>
            <p className="text-gray-600">
              Click the "Paraphrase" button to generate a refined version of
              your text.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
