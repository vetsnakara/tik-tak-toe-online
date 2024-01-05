import Image from "next/image";
import avatar from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }) {
    return (
        <div className={clsx("flex items-center gap-2 text-start", className)}>
            <Image
                width="48"
                height="48"
                alt="avatar"
                src={avatar}
                unoptimized
            />
            <div>
                <div className="text-lg leading-tight">Username</div>
                <div className="text-slate-400 text-xs leading-tight">
                    Rating: 123
                </div>
            </div>
        </div>
    );
}
