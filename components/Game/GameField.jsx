import clsx from "clsx";

import { Button } from "../uikit/Button";
import { GameSymbol } from "./GameSymbol";
import { useGameState } from "./useGameState";

export function GameField({ className, playersCount }) {
    const {
        gameState: { cells, currentMove },
        handleCellClick,
        nextMove,
    } = useGameState({ playersCount });

    const actions = (
        <>
            <Button size="md" variant="primary">
                Ничья
            </Button>
            <Button size="md" variant="outline">
                Сдаться
            </Button>
        </>
    );

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo
                actions={actions}
                currentMove={currentMove}
                nextMove={nextMove}
            />
            <GameGrid>
                {cells.map((symbol, i) => (
                    <GameCell key={i} onClick={() => handleCellClick(i)}>
                        {symbol && (
                            <GameSymbol symbol={symbol} className="w-5 h-5" />
                        )}
                    </GameCell>
                ))}
            </GameGrid>
        </GameFieldLayout>
    );
}

function GameFieldLayout({ children, className }) {
    return (
        <div
            className={clsx(
                className,
                "bg-white rounded-2xl shadow-md px-8  pt-5 pb-7",
            )}
        >
            {children}
        </div>
    );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
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

function GameGrid({ children }) {
    return (
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
            {children}
        </div>
    );
}

function GameCell({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
        >
            {children}
        </button>
    );
}
