import { useState } from "react";
import GameHeader from "./components/gameHeader";
import Selector from "./components/selector";
import Result from "./components/results";
import Rules from "./components/rules";
import { myContext, myScore, myBonus } from "./myContext";
import "./App.css";

function App() {
  const [userSelection, setUserSelection] = useState("");
  const [score, setScore] = useState(
    sessionStorage.getItem("score")
      ? parseInt(sessionStorage.getItem("score") as string)
      : 0,
  );
  const [showRules, setShowRules] = useState(false);
  const [bonus, setBonus] = useState(score >= 10 ? true : false);

  return (
    <div className="relative h-screen flex flex-col items-center justify-between gap-0 max-w-341.5 pt-10 lg:pt-0">
      <myBonus.Provider value={{ bonus, setBonus }}>
        <myContext.Provider value={{ userSelection, setUserSelection }}>
          <myScore.Provider value={{ score, setScore }}>
            <div
              className={`absolute ${showRules ? "flex" : "hidden"} flex-col items-center justify-center inset-0 w-full h-full bg-black/40 z-20`}
            >
              <Rules setShowRules={setShowRules} />
            </div>
            <GameHeader />
            {userSelection === "" ? <Selector /> : <Result />}

            <div className="flex flex-row items-center justify-center lg:justify-end w-full">
              <button
                className="p-1 px-4 text-white text-sm border m-4 w-fit border-white rounded-md cursor-pointer"
                onClick={() => setShowRules(true)}
              >
                RULES
              </button>
            </div>
          </myScore.Provider>
        </myContext.Provider>
      </myBonus.Provider>
    </div>
  );
}

export default App;