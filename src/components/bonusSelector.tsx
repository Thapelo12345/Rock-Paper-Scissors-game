import ClickableSelector from "./clickable";

export default function BonusSelector() {
  return (
    <div className="flex flex-col items-center justify-center w-fit">
      
      <ClickableSelector
        iconValue={"scissors"}
        iconUrl={`${import.meta.env.BASE_URL}images/icon-scissors.svg`}
        borderColor={`hsl(39,89%,49%)`}
        shadowColor="hsl(28,76%,44%)"
      />

      <div className="flex flex-row items-center justify-center gap-18 w-full">
        <ClickableSelector
          iconValue={"spock"}
          iconUrl={`${import.meta.env.BASE_URL}images/icon-spock.svg`}
          borderColor={`hsl(189, 59%, 53%)`}
          shadowColor="hsl(194, 58%, 42%)"
        />

        <ClickableSelector
          iconValue={"paper"}
          iconUrl={`${import.meta.env.BASE_URL}images/icon-paper.svg`}
          borderColor={`hsl(230,89%,62%)`}
          shadowColor="hsl(229, 64%, 46%)"
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-2 w-full m-4">
        <ClickableSelector
          iconValue={"lizard"}
          iconUrl={`${import.meta.env.BASE_URL}images/icon-lizard.svg`}
          borderColor={`hsl(261,73%,60%)`}
          shadowColor="hsl(261, 51%, 44%)"
        />

        <ClickableSelector
          iconValue={"rock"}
          iconUrl={`${import.meta.env.BASE_URL}images/icon-rock.svg`}
          borderColor={`hsl(349,71%,52%)`}
          shadowColor="hsl(347, 75%, 35%)"
        />
      </div>

      {/* background shape  */}
      <div className="background-shape">
        <img 
        src={`${import.meta.env.BASE_URL}images/bg-pentagon.svg`}
        />
      </div>
    </div>
  );
}
