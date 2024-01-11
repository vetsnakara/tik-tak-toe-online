import { memo } from "react";
import { HistoryIcon } from "./icons/HistoryIcon";
import { StarIcon } from "./icons/StarIcon";
import { UserIcon } from "./icons/UserIcon";

export const GameInfo = memo(function GameInfo({
    playersCount,
    isRatingGame,
    timeMode,
}) {
    return (
        <div className="flex items-center gap-3 text-xs text-slate-400">
            {isRatingGame && <StarIcon />}
            <div className="flex items-center gap-1">
                <UserIcon /> {playersCount}
            </div>
            <div className="flex items-center gap-1">
                <HistoryIcon /> {timeMode}
            </div>
        </div>
    );
});
