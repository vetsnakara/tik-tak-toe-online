import { useState } from "react";
import { GAME_SYMBOL } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState({ playersCount }) {
    const [gameState, setGameState] = useState(() => ({
        currentMove: GAME_SYMBOL.CROSS,
        cells: new Array(19 * 19).fill(null),
    }));

    const handleCellClick = (index) => {
        setGameState((prevState) => {
            if (prevState.cells[index]) return prevState;

            return {
                ...prevState,
                currentMove: getNextMove(prevState.currentMove, playersCount),
                cells: prevState.cells.map((cell, i) =>
                    i === index ? prevState.currentMove : cell,
                ),
            };
        });
    };

    const nextMove = getNextMove(gameState.currentMove, playersCount);
    const winnerSequence = computeWinner(gameState.cells);

    return { ...gameState, handleCellClick, nextMove, winnerSequence };
}
