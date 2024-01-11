import { useReducer } from "react";
import { PLAYERS, PLAYERS_COUNT } from "./constants";

import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameCell } from "./ui/GameCell";
import { GameOverModal } from "./ui/GameOverModal";

import { computeWinnerSymbol } from "./model/computeWinnerSymbol";
import { getNextMove } from "./model/getNextMove";
import { computeWinner } from "./model/computeWinner";
import {
    gameStateReducer,
    initGameState,
    GAME_STATE_ACTIONS,
} from "./model/gameStateReducer";

export function Game() {
    const [gameState, dispatch] = useReducer(
        gameStateReducer,
        { playersCount: PLAYERS_COUNT },
        initGameState,
    );

    const nextMove = getNextMove(gameState);
    const winnerSequence = computeWinner(gameState);

    const winnerSymbol = computeWinnerSymbol(gameState, {
        winnerSequence,
        nextMove,
    });

    const winnerPlayer = PLAYERS.find(
        (player) => player.symbol === winnerSymbol,
    );

    const { currentMove, cells } = gameState;

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
                    (player, index) => (
                        <PlayerInfo
                            key={player.id}
                            avatar={player.avatar}
                            name={player.name}
                            rating={player.rating}
                            seconds={60}
                            symbol={player.symbol}
                            isRight={index % 2 === 1}
                        />
                    ),
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
                        onClick={() =>
                            dispatch({
                                type: GAME_STATE_ACTIONS.CELL_CLICK,
                                index,
                            })
                        }
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
                    (player, index) => (
                        <PlayerInfo
                            key={player.id}
                            avatar={player.avatar}
                            name={player.name}
                            rating={player.rating}
                            seconds={60}
                            symbol={player.symbol}
                            isRight={index % 2 === 1}
                        />
                    ),
                )}
            />
        </>
    );
}
