import { useContext } from "react";
import { myBonus } from "../myContext";

type PROP= {
  setShowRules: (value: boolean)=> void;
}
export default function Rules({ setShowRules }: PROP) {
  const { bonus } = useContext(myBonus);

  return (
    <div className="flex flex-col items-center bg-white w-fit p-4 rounded-lg">
      <div className="flex flex-row items-center justify-center md:justify-between p-2 my-2 w-full">
        <h1 className="text-2xl text-black/40" 
        style={{ fontWeight: 700 }}>
          RULES
        </h1>
        <button className="cursor-pointer hidden md:block"
        onClick={() => setShowRules(false)}
        >
          <img
            src="../../public/images/icon-close.svg"
            style={{ width: "75%", height: "75%" }}
          />
        </button>
      </div>
      <img
        src={
          bonus
            ? "../../public/images/image-rules-bonus.svg"
            : "../../public/images/image-rules.svg"
        }
      />

      <button className="cursor-pointer block md:hidden my-5 mt-5"
      onClick={() => setShowRules(false)}
      >
        <img
            src="../../public/images/icon-close.svg"
            style={{ width: "85%", height: "85%" }}
          />
      </button>
    </div>
  );
}
