import { useState } from "react";

import { GameInfo, GameTitle, useGameState } from "../components/Game";
import { GameField } from "../components/Game/GameField";
import { Header } from "../components/Header";

export default function HomePage() {
    const [playersCount] = useState(2);

    const { cells, currentMove, handleCellClick, nextMove, winnerSequence } =
        useGameState({
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
                    className="mt-4"
                />
                <GameField
                    cells={cells}
                    currentMove={currentMove}
                    nextMove={nextMove}
                    winnerSequence={winnerSequence}
                    handleCellClick={handleCellClick}
                    className="mt-4"
                />
            </main>
        </div>
    );
}
