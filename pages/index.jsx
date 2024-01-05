import { GameInfo, GameTitle } from "../components/Game";
import { GameField } from "../components/Game/GameField";
import { Header } from "../components/Header";

export default function HomePage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle />
                <GameInfo className="mt-4" />
                <GameField className="mt-4" />
            </main>
        </div>
    );
}
