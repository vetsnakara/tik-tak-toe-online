import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const PLAYERS_COUNT = 4;

export const GAME_SYMBOL = {
    ZERO: "zero",
    CROSS: "cross",
    SQUARE: "square",
    TRIANGLE: "triangle",
};

export const MOVE_ORDER = [
    GAME_SYMBOL.CROSS,
    GAME_SYMBOL.ZERO,
    GAME_SYMBOL.SQUARE,
    GAME_SYMBOL.TRIANGLE,
];

export const PLAYERS = [
    {
        id: 1,
        name: "Name1",
        avatar: avatarSrc1,
        rating: 111,
        symbol: GAME_SYMBOL.CROSS,
    },
    {
        id: 4,
        name: "Nameeeeeeeeeeee4",
        avatar: avatarSrc4,
        rating: 444,
        symbol: GAME_SYMBOL.ZERO,
    },
    {
        id: 2,
        isRight: true,
        name: "Name2",
        avatar: avatarSrc2,
        rating: 222,
        symbol: GAME_SYMBOL.SQUARE,
    },
    {
        id: 3,
        name: "Name3",
        avatar: avatarSrc3,
        rating: 333,
        symbol: GAME_SYMBOL.TRIANGLE,
    },
];
