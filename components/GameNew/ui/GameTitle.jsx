import { memo } from "react";

export const GameTitle = memo(function GameTitle() {
    return <h1 className="text-4xl leading-tight">Крестики нолики</h1>;
});
