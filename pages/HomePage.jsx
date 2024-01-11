import { Header } from "../components/Header";
import { Game } from "../components/GameNew";
import { PLAYERS_COUNT } from "../components/GameNew/constants";

export default function HomePage() {
    return (
        <HomePageLayout header={<Header playersCount={PLAYERS_COUNT} />}>
            <Game />
        </HomePageLayout>
    );
}

function HomePageLayout({ header, children }) {
    return (
        <div className="bg-slate-50 min-h-screen">
            {header}
            <main className="pt-6 mx-auto w-max">{children}</main>
        </div>
    );
}
