import React, { useContext } from "react";
import { Context } from "../context/Context";
const GenerateText = () => {
  const { setTone, input, setInput, genResponse, output } = useContext(Context);
  return (
    <div className="flex flex-col gap-6 items-center">
      <ul className="flex gap-2 bg-gray-100 rounded-full py-2 px-6 border items-center justify-center w-auto border-slate-100">
        <li className="">
          <button
            onClick={() => setTone("Standard")}
            className="hover:font-semibold hover:scale-105 hover:bg-gray-300 rounded-full px-3 transition-all duration-300"
          >
            standard
          </button>
        </li>
        <li>
          <button
            onClick={() => setTone("Fluent")}
            className="hover:font-semibold hover:scale-105 hover:bg-gray-300 rounded-full px-3 transition-all duration-300"
          >
            Fluent
          </button>
        </li>
        <li>
          <button
            onClick={() => setTone("Professional")}
            className="hover:font-semibold hover:scale-105 hover:bg-gray-300 rounded-full px-3 transition-all duration-300"
          >
            Professional
          </button>
        </li>
        <li>
          <button
            onClick={() => setTone("Academic")}
            className="hover:font-semibold hover:scale-105 hover:bg-gray-300 rounded-full px-3 transition-all duration-300"
          >
            Academic
          </button>
        </li>
        <li>
          <button
            onClick={() => setTone("Human")}
            className="hover:font-semibold hover:scale-105 hover:bg-gray-300 rounded-full px-3 transition-all duration-300"
          >
            Human
          </button>
        </li>
      </ul>
      <div className="flex gap-6 py-3 px-4 bg-zinc-100 w-[100svh] rounded-xl h-[40vh]">
        <div className="w-1/2 bg-white py-2 px-6 rounded-xl">
          {/* User input */}
          <textarea
            type="text"
            placeholder="Type text here . . ."
            className="w-full border-none outline-none bg-transparent h-full resize-none"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
        </div>
        <div className="w-1/2 bg-white py-2 px-6 rounded-xl overflow-auto">
          {/* Bot output */}
          <p>{output}</p>
        </div>
      </div>
      <button
        onClick={() => genResponse()}
        className="flex bg-black text-white rounded-full gap-4 py-2 px-4"
      >
        Paraphrase
      </button>
    </div>
  );
};

export default GenerateText;
