import { clsx } from "clsx";
import { SYMBOL_O, SYMBOL_X } from "./constants";

export const GameSymbol = ({ symbol }) => (
  <span
    className={clsx(
      "text-xl leading-3",
      symbol === SYMBOL_O ? "text-green-500" : " text-red-500",
    )}
  >
    {symbol}
  </span>
);
