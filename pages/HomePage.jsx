import { useState } from "react";

import { GameInfo, GameTitle, useGameState } from "../components/Game";
import { GameField } from "../components/Game/GameField/GameField";
import { Header } from "../components/Header";
import { GameSymbol } from "../components/Game/GameSymbol";

export default function HomePage() {
    const [playersCount] = useState(4);

    const {
        cells,
        currentMove,
        handleCellClick,
        handlePlayerTimeOver,
        nextMove,
        winnerSequence,
        winnerSymbol,
    } = useGameState({
        playersCount,
    });

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header playersCount={playersCount} />

            <main className="pt-6 mx-auto w-max">
                <GameTitle playersCount={playersCount} />

                <GameInfo
                    playersCount={playersCount}
                    currentMove={currentMove}
                    isWinner={Boolean(winnerSymbol)}
                    onTimeOver={handlePlayerTimeOver}
                    className="mt-4"
                />

                {winnerSymbol && (
                    <div className="my-3">
                        <GameSymbol symbol={winnerSymbol} />
                    </div>
                )}

                <GameField
                    cells={cells}
                    currentMove={currentMove}
                    nextMove={nextMove}
                    winnerSequence={winnerSequence}
                    winnerSymbol={winnerSymbol}
                    handleCellClick={handleCellClick}
                    className="mt-4"
                />
            </main>
        </div>
    );
}
