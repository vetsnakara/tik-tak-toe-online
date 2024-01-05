import { GameInfo, GameTitle } from "../components/Game";
import { Header } from "../components/Header";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[616px]">
        <GameTitle />
        <GameInfo className="mt-4" />
      </main>
    </div>
  );
}
