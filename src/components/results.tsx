import { useEffect, useState, useContext } from "react";
import { myContext, myScore, myBonus } from "../myContext";
import ClickableSelector from "./clickable";

const selectionItems = [
  {
    title: "scissors",
    iconUrl: `${import.meta.env.BASE_URL}images/icon-scissors.svg`,
    borderColor: `hsl(39,89%,49%)`,
    shadowColor: "hsl(28, 76%, 44%)",
  },

  {
    title: "spock",
    iconUrl: `${import.meta.env.BASE_URL}images/icon-spock.svg`,
    borderColor: `hsl(189, 59%, 53%)`,
    shadowColor: "hsl(194, 58%, 42%)",
  },

  {
    title: "paper",
    iconUrl: `${import.meta.env.BASE_URL}images/icon-paper.svg`,
    borderColor: `hsl(230,89%,62%)`,
    shadowColor: "hsl(229, 64%, 46%)",
  },

  {
    title: "lizard",
    iconUrl: `${import.meta.env.BASE_URL}images/icon-lizard.svg`,
    borderColor: `hsl(261,73%,60%)`,
    shadowColor: "hsl(261, 51%, 44%)",
  },

  {
    title: "rock",
    iconUrl: `${import.meta.env.BASE_URL}images/icon-rock.svg`,
    borderColor: `hsl(349,71%,52%)`,
    shadowColor: "hsl(347, 75%, 35%)",
  },
];

type ITEMICON = {
  title: string;
  iconUrl: string;
  borderColor: string;
  shadowColor: string;
};

export default function Result() {
  const { userSelection, setUserSelection } = useContext(myContext);
  const { score, setScore } = useContext(myScore);
  const { bonus, setBonus } = useContext(myBonus);

  const currentSelection =
    selectionItems[
      selectionItems.indexOf(
        selectionItems.filter((item) => item.title === userSelection)[0],
      )
    ];

  const [computerSelection, setComputerSelection] = useState<ITEMICON>();
  const [finalresult, setFinalResult] = useState("");

  function findWinner(user: string, computer: string) {
    /* PAPER, SCISSORS, LIZARD, SPOCK */

    if (user === computer) {
      setFinalResult("it's a draw");
    } else {
      switch (user) {
        case "paper":
          setFinalResult(
            computer === "rock" || computer === "spock"
              ? "you win"
              : "you lose",
          );
          break;

        case "scissors":
          setFinalResult(
            computer === "paper" || computer === "lizard"
              ? "you win"
              : "you lose",
          );
          break;

        case "lizard":
          setFinalResult(
            computer === "spock" || computer === "paper"
              ? "you win"
              : "you lose",
          );
          break;

        case "spock":
          setFinalResult(
            computer === "scissors" || computer === "rock"
              ? "you win"
              : "you lose",
          );
          break;

        case "rock":
          setFinalResult(
            computer === "lizard" || computer === "scissors"
              ? "you win"
              : "you lose",
          );
          break;

        default:
          break;
      }
    }
  } //end of find winner function

  useEffect(() => {
    setTimeout(() => {
      const randomIndex = Math.floor(
        Math.random() *
          (bonus ? selectionItems.length : selectionItems.length - 2),
      );
      const selectedArray = bonus
        ? selectionItems
        : selectionItems.filter((item) => {
            if (item.title !== "lizard" && item.title !== "spock") return item;
          });
      setComputerSelection(selectedArray[randomIndex]);
      setTimeout(
        () => findWinner(userSelection, selectedArray[randomIndex].title),
        1200,
      );
    }, 2500);
  }, []);

  useEffect(() => {
    if (finalresult === "you win") setScore(score + 1);
    // else if (finalresult === "you lose" && score > 0) setScore(score - 1)
  }, [finalresult]);

  useEffect(() => {
    if (score >= 10) setBonus(true);
    sessionStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <div
      className=" flex flex-col py-auto w-[90%] mx-auto"
      style={{ fontWeight: 700 }}
    >
      <div className="flex flex-row items-center justify-center gap-10 ">
        <div className="selected-icons">
          <h4>YOU PICKED</h4>
          <ClickableSelector
            upScale={true}
            winner={finalresult === "you win" ? true : false}
            iconValue={currentSelection.title}
            iconUrl={currentSelection.iconUrl}
            borderColor={currentSelection.borderColor}
            shadowColor={currentSelection.shadowColor}
          />
        </div>

        {finalresult !== "" && (
          <div
            className={`hidden lg:flex flex-col items-center justify-center p-0 `}
          >
            <h5 className="text-white text-2xl">
              {finalresult.toUpperCase()}!
            </h5>
            <button
              className="text-black text-xs bg-white p-2 px-8 rounded-lg cursor-pointer"
              onClick={() => setUserSelection("")}
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        <div className="selected-icons">
          <h4>THE HOUSE PICKED</h4>
          {!computerSelection ? (
            <div className="m-5 w-25 h-25 bg-black/40 rounded-full"></div>
          ) : (
            <ClickableSelector
              upScale={true}
              winner={finalresult === "you lose" ? true : false}
              iconValue={computerSelection.title}
              iconUrl={computerSelection.iconUrl}
              borderColor={computerSelection.borderColor}
              shadowColor={computerSelection.shadowColor}
            />
          )}
        </div>
      </div>

      {finalresult !== "" && (
        <div
          className={`flex flex-col items-center justify-center m-0 p-0 lg:hidden mx-auto`}
        >
          <h5 className="text-white text-2xl">{finalresult.toUpperCase()}!</h5>
          <button
            className="text-black text-xs bg-white p-2 px-8 rounded-lg cursor-pointer"
            onClick={() => setUserSelection("")}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}
