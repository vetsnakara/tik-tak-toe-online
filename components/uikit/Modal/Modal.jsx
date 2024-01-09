import clsx from "clsx";

import { CrossLightIcon } from "./CrossLightIcon";
import { Portal } from "../../Portal";

/**
 * @param {{
 *   isOpen: boolean
 *   onClose: Function
 *   width: "md" | "full",
 *   children,
 * }} props
 */
export function Modal({
    isOpen = false,
    onClose,
    width = "md",
    className,
    children,
}) {
    if (!isOpen) return null;

    const classes = clsx(
        "bg-white rounded min-h-[320px] mx-auto relative flex flex-col",
        {
            md: "max-w-[640px] w-full",
            full: "mx-5",
        }[width],
        className,
    );

    const handleClick = (e) => {
        const inModal = e.target.closest("[data-id='modal']");
        if (inModal) return;
        onClose();
    };

    const modal = (
        <div
            onClick={handleClick}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 z-10 overflow-auto"
        >
            <div className={classes} data-id="modal">
                <button
                    className="w-8 h-8 rounded flex items-center justify-center
                   hover:bg-white/40 bg-white/10 absolute left-[calc(100%+12px)] transition-colors"
                    onClick={onClose}
                >
                    <CrossLightIcon className="w-4 h-4 text-white" />
                </button>
                {children}
            </div>
        </div>
    );

    return <Portal selector="#modals">{modal}</Portal>;
}

Modal.Header = function ModalHeader({ className, children }) {
    return (
        <div className={clsx("px-6 pt-6 pb-4 text-2xl", className)}>
            {children}
        </div>
    );
};

Modal.Body = function ModalHeader({ className, children }) {
    return <div className={clsx("px-6", className)}>{children}</div>;
};

Modal.Footer = function ModalHeader({ className, children }) {
    return (
        <div className={clsx("mt-auto p-6 flex gap-4 justify-end", className)}>
            {children}
        </div>
    );
};
