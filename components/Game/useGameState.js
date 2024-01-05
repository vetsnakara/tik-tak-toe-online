import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "./constants";

function getNextMove(currentMove) {
    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
    return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOL.CROSS,
    }));

    const handleCellClick = (index) => {
        setGameState((prevState) => {
            if (prevState.cells[index]) return prevState;

            return {
                currentMove: getNextMove(prevState.currentMove),
                cells: prevState.cells.map((cell, i) =>
                    i === index ? prevState.currentMove : cell,
                ),
            };
        });
    };

    const nextMove = getNextMove(gameState.currentMove);

    return { gameState, handleCellClick, nextMove };
}
