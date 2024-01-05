import clsx from "clsx";

import { Profile } from "../Profile";
import { CrossIcon } from "./icons/CrossIcon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="text-slate-900 text-lg font-semibold">01:09</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-orange-600 text-lg font-semibold">01:09</div>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
