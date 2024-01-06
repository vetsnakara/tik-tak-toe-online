import { useState } from "react";
import { GameInfo, GameTitle } from "../components/Game";
import { GameField } from "../components/Game/GameField";
import { Header } from "../components/Header";

export default function HomePage() {
    const [playersCount] = useState(4);

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header playersCount={playersCount} />
            <main className="pt-6 mx-auto w-max">
                <GameTitle playersCount={playersCount} />
                <GameInfo playersCount={playersCount} className="mt-4" />
                <GameField playersCount={playersCount} className="mt-4" />
            </main>
        </div>
    );
}
