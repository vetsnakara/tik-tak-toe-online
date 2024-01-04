import { GameInfo } from "./GameInfo";
import { GameCell } from "./GameCell";
import { ResetButton } from "./ResetButton";
import { useGameState } from "./useGameState";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border-black p-5">
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />

      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>

      <ResetButton onClick={handleResetClick} />
    </div>
  );
}
