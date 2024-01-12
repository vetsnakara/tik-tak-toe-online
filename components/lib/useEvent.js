import { useCallback, useRef } from "react";

export function useEvent(callback) {
    const ref = useRef(null);

    ref.current = callback;

    return useCallback((...args) => {
        ref.current(...args);
    }, []);
}
