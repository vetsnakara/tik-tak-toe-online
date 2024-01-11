import { useCallback, useMemo, useReducer } from "react";
import { PLAYERS, PLAYERS_COUNT } from "./constants";

import { BackLink } from "./ui/BackLink";
import { GameCell } from "./ui/GameCell";
import { GameInfo } from "./ui/GameInfo";
import { GameLayout } from "./ui/GameLayout";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameTitle } from "./ui/GameTitle";
import { PlayerInfo } from "./ui/PlayerInfo";

import { computePlayerTimer } from "./model/computePlayerTimer";
import { computeWinner } from "./model/computeWinner";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";
import { getNextMove } from "./model/getNextMove";

import { useInterval } from "../lib/timers";
import {
    GAME_STATE_ACTIONS,
    gameStateReducer,
    initGameState,
} from "./model/gameStateReducer";
import { GameOverModal } from "./ui/GameOverModal";

export function Game() {
    const [gameState, dispatch] = useReducer(
        gameStateReducer,
        {
            playersCount: PLAYERS_COUNT,
            defaultTimer: 20 * 1000,
            currentMoveStart: Date.now(),
        },
        initGameState,
    );

    const nextMove = getNextMove(gameState);
    const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);

    const winnerSymbol = computeWinnerSymbol(gameState, {
        winnerSequence,
        nextMove,
    });

    const winnerPlayer = PLAYERS.find(
        (player) => player.symbol === winnerSymbol,
    );

    useInterval(
        1000,
        !winnerSymbol,
        useCallback(() => {
            dispatch({
                type: GAME_STATE_ACTIONS.TICK,
                now: Date.now(),
            });
        }, []),
    );

    const { currentMove, cells } = gameState;

    const handleClick = useCallback(
        (index) =>
            dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
                now: Date.now(),
            }),
        [],
    );

    return (
        <>
            {/* GameLayout */}
            <GameLayout
                backLink={<BackLink />}
                title={<GameTitle />}
                gameInfo={
                    <GameInfo
                        isRatingGame
                        playersCount={PLAYERS_COUNT}
                        timeMode="1 мин. на ход"
                    />
                }
                playerList={PLAYERS.slice(0, PLAYERS_COUNT).map(
                    (player, index) => {
                        const { timer, timerStartAt } = computePlayerTimer(
                            gameState,
                            player.symbol,
                        );

                        const timerEnabled =
                            !winnerSymbol && Boolean(timerStartAt);

                        return (
                            <PlayerInfo
                                key={player.id}
                                avatar={player.avatar}
                                name={player.name}
                                rating={player.rating}
                                symbol={player.symbol}
                                isRight={index % 2 === 1}
                                timer={timer}
                                timerStartAt={timerStartAt}
                                timerEnabled={timerEnabled}
                            />
                        );
                    },
                )}
                gameMoveInfo={
                    <GameMoveInfo
                        currentMove={currentMove}
                        nextMove={nextMove}
                    />
                }
                gameCells={cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        index={index}
                        onClick={handleClick}
                        isWinner={winnerSequence?.includes(index)}
                        disabled={Boolean(winnerSymbol)}
                        symbol={symbol}
                    />
                ))}
            />

            {/* GameOverModal */}
            <GameOverModal
                winnerName={winnerPlayer?.name}
                players={PLAYERS.slice(0, PLAYERS_COUNT).map(
                    (player, index) => {
                        const { timer } = computePlayerTimer(
                            gameState,
                            player.symbol,
                        );

                        return (
                            <PlayerInfo
                                key={player.id}
                                avatar={player.avatar}
                                name={player.name}
                                rating={player.rating}
                                symbol={player.symbol}
                                isRight={index % 2 === 1}
                                timer={timer}
                            />
                        );
                    },
                )}
            />
        </>
    );
}
