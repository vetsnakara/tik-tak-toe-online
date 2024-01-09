import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ selector, children }) => {
    const ref = useRef(null);

    const [, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector(selector);
        setMounted(true);
    }, [selector]);

    return ref.current ? createPortal(children, ref.current) : null;
};
