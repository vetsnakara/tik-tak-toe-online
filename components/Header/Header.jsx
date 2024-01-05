import Image from "next/image";

import logo from "./logo.svg";
import { Profile } from "../Profile";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image alt="logo" src={logo} />
      <div className="w-px h-8 bg-slate-200 mx-4" />
      <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight">
        Играть
      </button>

      <button className="flex items-center text-teal-600 gap-2 ml-auto">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
