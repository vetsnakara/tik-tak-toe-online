import clsx from "clsx";

export function GameFieldLayout({ children, className }) {
    return (
        <div
            className={clsx(
                className,
                "bg-white rounded-2xl shadow-md px-8  pt-5 pb-7",
            )}
        >
            {children}
        </div>
    );
}
