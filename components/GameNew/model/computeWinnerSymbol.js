export function computeWinnerSymbol(gameState, { winnerSequence, nextMove }) {
    const { currentMove, cells } = gameState;

    return nextMove === currentMove // only one player left
        ? currentMove
        : cells[winnerSequence?.[0]];
}
