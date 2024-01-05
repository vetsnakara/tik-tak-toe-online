import Image from "next/image";

import logo from "./logo.svg";
import { Profile } from "../Profile";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { Button } from "../uikit/Button";

export function Header() {
    return (
        <header className="flex h-24 items-center px-8 bg-white shadow-lg">
            <Image alt="logo" src={logo} />
            <div className="w-px h-8 bg-slate-200 mx-4" />

            <Button className="w-44" variant="primary" size="lg">
                Играть
            </Button>

            <button className="flex items-center text-teal-600 gap-2 ml-auto">
                <Profile />
                <ArrowDownIcon />
            </button>
        </header>
    );
}
