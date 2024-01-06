import clsx from "clsx";

import { Profile } from "../Profile";
import { GameSymbol } from "./GameSymbol";
import { GAME_SYMBOL } from "./constants";

import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";
import { useEffect, useState } from "react";

const players = [
    {
        id: 1,
        name: "Name1",
        avatar: avatarSrc1,
        rating: 111,
        symbol: GAME_SYMBOL.CROSS,
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
    {
        id: 4,
        name: "Nameeeeeeeeeeee4",
        avatar: avatarSrc4,
        rating: 444,
        symbol: GAME_SYMBOL.ZERO,
    },
];

export function GameInfo({ className, playersCount, currentMove }) {
    return (
        <div
            className={clsx(
                "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3",
                className,
            )}
        >
            {players.slice(0, playersCount).map((player, index) => (
                <PlayerInfo
                    key={player.id}
                    playerInfo={player}
                    isRight={index % 2 === 1}
                    isTimerRun={currentMove === player.symbol}
                />
            ))}
        </div>
    );
}

function PlayerInfo({ playerInfo, isRight, isTimerRun }) {
    const SECONDS = 60;

    const [seconds, setSeconds] = useState(SECONDS);

    useEffect(() => {
        let interval = null;

        if (isTimerRun) {
            setSeconds(SECONDS);

            interval = setInterval(() => {
                setSeconds((s) => Math.max(s - 1, 0));
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isTimerRun]);

    const isDanger = seconds <= 10;
    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondsStr = String(seconds % 60).padStart(2, "0");

    const getTimerColor = () => {
        if (isTimerRun) {
            return isDanger ? "text-orange-600" : "text-slate-900";
        }

        return "text-slate-200";
    };

    return (
        <div className="flex items-center gap-3">
            <div className={clsx("relative", isRight && "order-3")}>
                <Profile
                    name={playerInfo.name}
                    raging={playerInfo.raging}
                    avatar={playerInfo.avatar}
                    className="w-44"
                />
                <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                    <GameSymbol symbol={playerInfo.symbol} />
                </div>
            </div>
            <div
                className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
            />
            <div
                className={clsx(
                    "text-lg font-semibold w-[60px]",
                    getTimerColor(),
                    isRight && "order-1",
                )}
            >
                {minutesStr}:{secondsStr}
            </div>
        </div>
    );
}
