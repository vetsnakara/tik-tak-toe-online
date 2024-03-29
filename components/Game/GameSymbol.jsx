import { GAME_SYMBOL } from "./constants";
import { CrossIcon } from "../GameNew/ui/icons/CrossIcon";
import { SquareIcon } from "../GameNew/ui/icons/SquareIcon";
import { TringleIcon } from "../GameNew/ui/icons/TriangleIcon";
import { ZeroIcon } from "../GameNew/ui/icons/ZeroIcon";

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
