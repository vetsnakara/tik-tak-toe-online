import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "./constants";

function getNextMove(currentMove, playersCount) {
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

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

    return { gameState, handleCellClick, nextMove };
}
