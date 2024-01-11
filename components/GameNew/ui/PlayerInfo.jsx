import Image from "next/image";
import { GameSymbol } from "./GameSymbol";
import clsx from "clsx";

export function PlayerInfo({
    isRight,
    name,
    avatar,
    rating,
    symbol,
    isTimerRunning,
    seconds,
}) {
    const getTimerColor = () => {
        if (isTimerRunning) {
            return isDanger ? "text-orange-600" : "text-slate-900";
        }

        return "text-slate-200";
    };

    const isDanger = seconds <= 10;
    const minutesStr = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondsStr = String(seconds % 60).padStart(2, "0");

    return (
        <div className="flex items-center gap-3">
            <div className={clsx("relative", isRight && "order-3")}>
                <div className={"flex items-center gap-2 text-startu w-44"}>
                    <Image
                        width="48"
                        height="48"
                        alt="avatar"
                        src={avatar}
                        unoptimized
                    />
                    <div className="overflow-hidden">
                        <div className="text-lg leading-tight truncate">
                            {name}
                        </div>
                        <div className="text-slate-400 text-xs leading-tight">
                            Рейтинг: {rating}
                        </div>
                    </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                    <GameSymbol symbol={symbol} />
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
