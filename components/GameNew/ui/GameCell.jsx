import clsx from "clsx";
import { memo } from "react";
import { GameSymbol } from "./GameSymbol";

export const GameCell = memo(function GameCell({
    onClick,
    isWinner,
    disabled,
    symbol,
    index,
}) {
    return (
        <button
            onClick={() => onClick(index)}
            disabled={disabled}
            className={clsx(
                "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
                isWinner && "bg-orange-600/10",
            )}
        >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
        </button>
    );
});
