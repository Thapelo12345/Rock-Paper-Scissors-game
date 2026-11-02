import ClickableSelector from "./clickable";

export default function OriginalSelector() {
  return (
    <div className="relative flex flex-col items-center justify-center w-fit">
      <div className="flex flex-row items-center justify-center gap-15 w-full">
        <ClickableSelector
          iconValue={"paper"}
          iconUrl={`${import.meta.env.BASE_URL}images/icon-paper.svg`}
          borderColor={`hsl(230,89%,62%)`}
          shadowColor="hsl(229, 64%, 46%)"
        />

        <ClickableSelector
          iconValue={"scissors"}
          iconUrl={`${import.meta.env.BASE_URL}images/icon-scissors.svg`}
          borderColor={`hsl(39,89%,49%)`}
          shadowColor="hsl(28,76%,44%)"
        />
      </div>

      <ClickableSelector
        iconValue={"rock"}
        iconUrl={`${import.meta.env.BASE_URL}images/icon-rock.svg`}
        borderColor={`hsl(349,71%,52%)`}
        shadowColor="hsl(347, 75%, 35%)"
      />

      {/* background borders */}
      <div className="absolute top-10 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="150"
          viewBox="0 0 200 180"
        >
          <polygon
            points="10,10 190,10 100,170"
            fill="none"
            stroke="rgba(20, 22, 57, 0.5)"
            strokeWidth="15"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
