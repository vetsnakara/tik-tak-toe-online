import { useEffect, useState } from "react";

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
    useEffect(() => {
        if (!enabled) return;

        const int = setInterval(() => {
            callback(Date.now());
        }, interval);

        return () => clearInterval(int);
    }, [enabled, interval, callback]);
}
