import { GameSymbol } from "./GameSymbol";
import { clsx } from "clsx";

export function GameCell({ symbol, isWinner, onClick }) {
  return (
    <button
      className={clsx(
        "border border-gray-400 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-400",
      )}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
}
