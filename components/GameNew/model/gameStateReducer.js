import { produce } from "immer";

import { GAME_SYMBOL } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
    CELL_CLICK: "CELL_CLICK",
};

export const initGameState = ({ playersCount }) => ({
    currentMove: GAME_SYMBOL.CROSS,
    cells: new Array(19 * 19).fill(null),
    playersCount,
});

export const gameStateReducer = (state, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GAME_STATE_ACTIONS.CELL_CLICK:
                handleCellClick(draft, action);
        }
    });

function handleCellClick(draft, action) {
    const { cells, currentMove } = draft;
    const { index } = action;

    if (cells[index]) return;

    draft.cells[index] = currentMove;
    draft.currentMove = getNextMove(draft);
}
