import { useContext } from "react";
import BonusSelector from "./bonusSelector";
import OriginalSelector from "./originalSelector";
import { myBonus } from "../myContext";

export default function Selector() {
  const { bonus } = useContext(myBonus)

  return (
    <div className="relative flex flex-col items-center w-full">
      {
        bonus ? 
        (<BonusSelector />) :
        (<OriginalSelector />)
      }

    </div>
  );
}