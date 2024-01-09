import { useState } from "react";
import { GAME_SYMBOL } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState({ playersCount }) {
    const [{ currentMove, cells, playersTimeOver }, setGameState] = useState(
        () => ({
            currentMove: GAME_SYMBOL.CROSS,
            cells: new Array(19 * 19).fill(null),
            playersTimeOver: [],
        }),
    );

    const handleCellClick = (index) => {
        setGameState((prevState) => {
            if (prevState.cells[index]) return prevState;

            return {
                ...prevState,
                currentMove: getNextMove(
                    prevState.currentMove,
                    playersCount,
                    prevState.playersTimeOver,
                ),
                cells: prevState.cells.map((cell, i) =>
                    i === index ? prevState.currentMove : cell,
                ),
            };
        });
    };

    const handlePlayerTimeOver = (symbol) => {
        setGameState((prevState) => {
            return {
                ...prevState,
                playersTimeOver: [...prevState.playersTimeOver, symbol],
                currentMove: getNextMove(
                    prevState.currentMove,
                    playersCount,
                    prevState.playersTimeOver,
                ),
            };
        });
    };

    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

    const winnerSequence = computeWinner(cells);

    const winnerSymbol =
        nextMove === currentMove ? currentMove : winnerSequence?.[0];

    return {
        currentMove,
        cells,
        playersTimeOver,
        nextMove,
        winnerSequence,
        winnerSymbol,
        handleCellClick,
        handlePlayerTimeOver,
    };
}
