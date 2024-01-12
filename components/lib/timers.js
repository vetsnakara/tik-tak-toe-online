import { useEffect, useState } from "react";
import { useEvent } from "./useEvent";

export function useNow(interval, enabled) {
    const [now, setNow] = useState();

    useEffect(() => {
        if (!enabled) {
            setNow(undefined);
            return;
        }

        const int = setInterval(() => {
            setNow(Date.now());
        }, interval);

        return () => clearInterval(int);
    }, [enabled, interval]);

    return now;
}

export function useInterval(interval, enabled, callback) {
    const memoizedCallback = useEvent(callback);

    useEffect(() => {
        if (!enabled) return;

        console.log("useInterval");

        const int = setInterval(() => {
            memoizedCallback(Date.now());
        }, interval);

        return () => clearInterval(int);
    }, [enabled, interval, memoizedCallback]);
}
