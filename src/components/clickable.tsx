import { useContext } from "react";
import { myContext } from "../myContext";
import { useEffect, useRef } from "react";

type PROPS = {
  upScale?: boolean;
  winner?: boolean;
  iconValue: string;
  iconUrl: string;
  borderColor: string;
  shadowColor: string;
};

export default function ClickableSelector({
  upScale,
  winner,
  iconValue,
  iconUrl,
  borderColor,
  shadowColor,
}: PROPS) {
  const selectBtnRef = useRef<HTMLButtonElement>(null);

  const imagePath = iconUrl;
  const iconColor = "hsl(246, 11%, 37%)";

  const width = upScale ? "64px" : "45px";
  const height = upScale ? "60px" : "45px";

  const { setUserSelection } = useContext(myContext);

  useEffect(() => {
    if (!selectBtnRef.current) return;

    if (winner) selectBtnRef.current.classList.add("winner");
    else selectBtnRef.current.classList.remove("winner");
  }, [winner]);

  return (
    <button
      ref={selectBtnRef}
      className={`relative flex items-center justify-center ${upScale ? "border-20" : "border-10"} ${!upScale ? "hover:scale-95" : ""} bg-white w-fit p-4 rounded-full m-2 cursor-pointer transition-all duration-300`}
      type="button"
      key={iconValue}
      onClick={() => {
        if (!upScale) setUserSelection(iconValue);
      }}
      aria-label={`Select ${iconValue}`}
      style={{
        borderColor: borderColor,
        boxShadow: `0 5px 0.5px ${shadowColor}, inset -3.5px 1.5px 5px hsl(246, 11%, 37%)`,
      }}
    >
      <div
        style={{
          backgroundColor: iconColor,
          WebkitMaskImage: `url(${imagePath})`,
          maskImage: `url(${imagePath})`,
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          width: width,
          height: height,
          display: "inline-block",
          flexShrink: 0,
        }}
        aria-label="Icon-image"
      />
    </button>
  );
}
