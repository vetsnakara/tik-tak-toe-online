import { Button } from "../../uikit/Button";
import { GameSymbol } from "../GameSymbol";
import { GameCell } from "./GameCell";
import { GameGrid } from "./GameGrid";
import { GameFieldLayout } from "./GameLayout";
import { GameMoveInfo } from "./GameMoveInfo";

export function GameField({
    className,
    cells,
    currentMove,
    winnerSequence,
    winnerSymbol,
    nextMove,
    handleCellClick,
}) {
    const actions = (
        <>
            <Button size="md" variant="primary">
                Ничья
            </Button>
            <Button size="md" variant="outline">
                Сдаться
            </Button>
        </>
    );

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo
                actions={actions}
                currentMove={currentMove}
                nextMove={nextMove}
            />
            <GameGrid>
                {cells.map((symbol, i) => (
                    <GameCell
                        key={i}
                        onClick={() => handleCellClick(i)}
                        isWinner={winnerSequence?.includes(i)}
                        disabled={Boolean(winnerSymbol)}
                    >
                        {symbol && (
                            <GameSymbol symbol={symbol} className="w-5 h-5" />
                        )}
                    </GameCell>
                ))}
            </GameGrid>
        </GameFieldLayout>
    );
}
