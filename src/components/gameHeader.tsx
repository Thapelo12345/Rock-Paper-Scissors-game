import { useContext } from "react";
import { myScore } from "../myContext";
import { myBonus } from "../myContext";

export default function GameHeader() {
  const { score } = useContext(myScore);
  const { bonus } = useContext(myBonus);
  return (
    <div className="flex flex-row border-2 items-center justify-between gap-0 border-white/40 m-5 rounded-2xl w-[80%] lg:w-[40%] mx-auto p-4">
      <div>
        <img
          src={
            bonus
              ? `${import.meta.env.BASE_URL}images/logo-bonus.svg`
              : `${import.meta.env.BASE_URL}images/logo.svg`
          }
          style={{ width: "70%", height: "auto" }}
          alt="Logo Icon"
        />
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 md:w-[20%] min-[400px] h-[80%]">
        <label className="text-sm text-[hsl(229,64%,46%)]">SCORE</label>
        <h2 className="score">{score}</h2>
      </div>
    </div>
  );
}
