import cls from "./game.module.css";
import { GameSymbol } from "./GameSymbol";

export function GameCell({ symbol, isWinner, onClick }) {
  return (
    <button
      className={`${cls.cell} ${isWinner ? cls["cell-win"] : ""}`}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
}
