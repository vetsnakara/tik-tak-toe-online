import { GameSymbol } from "../GameSymbol";

export function GameMoveInfo({ actions, currentMove, nextMove }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="mr-auto">
                <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
                    Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
                    Следующий:{" "}
                    <GameSymbol symbol={nextMove} className="w-3 h-3" />
                </div>
            </div>
            {actions}
        </div>
    );
}
