import Image from "next/image";
import avararSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className, name, raging, avatar = avararSrc }) {
    return (
        <div className={clsx("flex items-center gap-2 text-start", className)}>
            <Image
                width="48"
                height="48"
                alt="avatar"
                src={avatar}
                unoptimized
            />
            <div className="overflow-hidden">
                <div className="text-lg leading-tight truncate">{name}</div>
                <div className="text-slate-400 text-xs leading-tight">
                    Рейтинг: {raging}
                </div>
            </div>
        </div>
    );
}
