import cls from "./game.module.css";

import { GameInfo } from "./GameInfo";
import { GameCell } from "./GameCell";
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
    <div className={cls.game}>
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />

      <div className={cls["game-field"]}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>

      <button className={cls.reset} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  );
}
