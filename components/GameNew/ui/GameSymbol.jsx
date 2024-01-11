import { GAME_SYMBOL } from "../constants";
import { CrossIcon } from "./icons/CrossIcon";
import { SquareIcon } from "./icons/SquareIcon";
import { TringleIcon } from "./icons/TriangleIcon";
import { ZeroIcon } from "./icons/ZeroIcon";

export function GameSymbol({ symbol, className }) {
    const Icon =
        {
            [GAME_SYMBOL.CROSS]: CrossIcon,
            [GAME_SYMBOL.SQUARE]: SquareIcon,
            [GAME_SYMBOL.TRIANGLE]: TringleIcon,
            [GAME_SYMBOL.ZERO]: ZeroIcon,
        }[symbol] ?? CrossIcon;

    return <Icon className={className} />;
}
