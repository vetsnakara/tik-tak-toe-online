import clsx from "clsx";

export function GameCell({ children, onClick, isWinner, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
                isWinner && "bg-orange-600/10",
            )}
        >
            {children}
        </button>
    );
}
