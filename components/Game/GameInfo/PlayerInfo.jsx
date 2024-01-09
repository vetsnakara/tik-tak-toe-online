import clsx from "clsx";
import { useState, useEffect } from "react";

import { Profile } from "../../Profile";
import { GameSymbol } from "../GameSymbol";

export function PlayerInfo({ playerInfo, isRight, isTimerRun, onTimeOver }) {
    const SECONDS = 5;

    const [seconds, setSeconds] = useState(SECONDS);

    useEffect(() => {
        let interval = null;

        if (isTimerRun) {
            interval = setInterval(() => {
                setSeconds((s) => Math.max(s - 1, 0));
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            setSeconds(SECONDS);
        };
    }, [isTimerRun]);

    useEffect(() => {
        if (seconds === 0) onTimeOver();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

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
