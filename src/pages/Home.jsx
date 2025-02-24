import React from "react";
import GenerateText from "../components/GenerateText";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-3 px-auto justify-center">
      <h1 className="text-5xl font-bold mt-10 my-auto text-center">Paraphrase Text</h1>
      <GenerateText />
      <Steps />
    </div>
  );
};

export default Home;
