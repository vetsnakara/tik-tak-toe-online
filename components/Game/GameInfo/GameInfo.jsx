import clsx from "clsx";

import { GAME_SYMBOL } from "../constants";

import avatarSrc1 from "../images/avatar-1.png";
import avatarSrc2 from "../images/avatar-2.png";
import avatarSrc3 from "../images/avatar-3.png";
import avatarSrc4 from "../images/avatar-4.png";

import { PlayerInfo } from "./PlayerInfo";

const players = [
    {
        id: 1,
        name: "Name1",
        avatar: avatarSrc1,
        rating: 111,
        symbol: GAME_SYMBOL.CROSS,
    },
    {
        id: 4,
        name: "Nameeeeeeeeeeee4",
        avatar: avatarSrc4,
        rating: 444,
        symbol: GAME_SYMBOL.ZERO,
    },
    {
        id: 2,
        isRight: true,
        name: "Name2",
        avatar: avatarSrc2,
        rating: 222,
        symbol: GAME_SYMBOL.SQUARE,
    },
    {
        id: 3,
        name: "Name3",
        avatar: avatarSrc3,
        rating: 333,
        symbol: GAME_SYMBOL.TRIANGLE,
    },
];

export function GameInfo({
    className,
    playersCount,
    currentMove,
    isWinner,
    onTimeOver,
}) {
    return (
        <div
            className={clsx(
                "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3",
                className,
            )}
        >
            {players.slice(0, playersCount).map((player, index) => {
                const isTimerRun = currentMove === player.symbol && !isWinner;

                return (
                    <PlayerInfo
                        key={player.id}
                        playerInfo={player}
                        isRight={index % 2 === 1}
                        isTimerRun={isTimerRun}
                        onTimeOver={() => onTimeOver(player.symbol)}
                    />
                );
            })}
        </div>
    );
}
