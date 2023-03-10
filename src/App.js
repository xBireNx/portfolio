import RoundOne from "./components/roundDesign/RoundOne";
import RoundTwo from "./components/roundDesign/RoundTwo";
import RoundThree from "./components/roundDesign/RoundThree";
import RoundFour from "./components/roundDesign/RoundFour";
import RoundFive from "./components/roundDesign/RoundFive";
import Home from "./Home";
import React from "react";

function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home/>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
