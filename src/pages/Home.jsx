import React from "react";
import GenerateText from "../components/GenerateText";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-3 px-auto">
      <h1 className="text-5xl font-bold mt-10">Paraphrase Text</h1>
      <GenerateText />
      <Steps />
    </div>
  );
};

export default Home;
