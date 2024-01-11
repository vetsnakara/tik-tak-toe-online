import Link from "next/link";
import { memo } from "react";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";

export const BackLink = memo(function BackLink() {
    return (
        <Link
            href="#"
            className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
        >
            <ArrowLeftIcon />
            На главную
        </Link>
    );
});
