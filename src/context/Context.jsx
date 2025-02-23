import { GoogleGenerativeAI } from "@google/generative-ai";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [tone, setTone] = useState("Standard");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  console.log("API Key:", import.meta.env);


  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `You are a praphraser bot.
  I want you to paraphrase the text I provide you.
  Do not speak about anything else.
  Do not answrer any questions.
  Your task is just to praphrase.
  The output should only be the paraphrased text.
  If a question is aksed, praphrase the question.
  If i do not provide text then ask "Proivde text to praphrase".
  The tone of the prapahrased text should be ${tone}.
  Here is the input text: ${input}`;

  const genResponse = async () => {
    console.log(input);
    const result = await model.generateContent(prompt);
    setOutput(result.response.text);
    console.log(result.response.text());
  };

  const contextValue = {
    tone,
    setTone,
    input,
    setInput,
    loading,
    setLoading,
    output,
    setOutput,
    genResponse,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
