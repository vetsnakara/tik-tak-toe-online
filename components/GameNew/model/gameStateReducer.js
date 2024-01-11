import { produce } from "immer";

import { GAME_SYMBOL, MOVE_ORDER } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
    CELL_CLICK: "CELL_CLICK",
    TICK: "TICK",
};

export const initGameState = ({
    playersCount,
    defaultTimer,
    currentMoveStart,
}) => ({
    currentMove: GAME_SYMBOL.CROSS,
    cells: new Array(19 * 19).fill(null),
    playersCount,
    currentMoveStart,
    timers: MOVE_ORDER.reduce(
        (timers, symbol, index) => ({
            ...timers,
            ...(index < playersCount && {
                [symbol]: defaultTimer,
            }),
        }),
        {},
    ),
});

export const gameStateReducer = (state, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GAME_STATE_ACTIONS.CELL_CLICK:
                handleCellClick(draft, action);
            case GAME_STATE_ACTIONS.TICK:
                handleTimeOver(draft, action);
        }
    });

function handleTimeOver(draft, action) {
    const { now } = action;

    if (!isTimeOver(draft, now)) return;

    updateTimers(draft, now);
    updateCurrentMove(draft);
}

function isTimeOver(draft, now) {
    const timer = getNewTimerForCurrentMove(draft, now);
    return timer <= 0;
}

function handleCellClick(draft, action) {
    const { cells } = draft;
    const { index, now } = action;

    if (cells[index]) return;

    updateTimers(draft, now);
    updateCell(draft, index);
    updateCurrentMove(draft);
}

function getNewTimerForCurrentMove(draft, now) {
    const { currentMoveStart, currentMove } = draft;

    const currentTimer = draft.timers[currentMove];
    const delta = now - currentMoveStart;

    const newTimer = currentTimer - delta;

    return newTimer;
}

function updateTimers(draft, now) {
    const { currentMove } = draft;
    draft.timers[currentMove] = getNewTimerForCurrentMove(draft, now);
    draft.currentMoveStart = now;
}

function updateCell(draft, index) {
    const { currentMove } = draft;
    draft.cells[index] = currentMove;
}

function updateCurrentMove(draft) {
    draft.currentMove = getNextMove(draft);
}
