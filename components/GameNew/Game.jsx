import { PLAYERS, PLAYERS_COUNT } from "./constants";

import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameCell } from "./ui/GameCell";

import { useGameState } from "./model/useGameState";
import { GameOverModal } from "./ui/GameOverModal";

export function Game() {
    const {
        cells,
        handleCellClick,
        winnerSequence,
        winnerSymbol,
        nextMove,
        currentMove,
    } = useGameState({ playersCount: PLAYERS_COUNT });

    const winnerPlayer = PLAYERS.find(
        (player) => player.symbol === winnerSymbol,
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
                gameCells={cells.map((symbol, i) => (
                    <GameCell
                        key={i}
                        onClick={() => handleCellClick(i)}
                        isWinner={winnerSequence?.includes(i)}
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
