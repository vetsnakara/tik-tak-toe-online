import { Game } from "../components/GameNew/Game";
import { PLAYERS_COUNT } from "../components/GameNew/constants";
import { Header } from "../components/Header";

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

// React key examples
// ---------------------------
// const users = [
//     { id: 1, name: "Kostya" },
//     { id: 2, name: "Sveta" },
// ];

// export default function App() {
//     const [sort, setSort] = useState("asc");

//     const sortedUsers = users.sort((a, b) =>
//         Math.sign(sort === "asc" ? a.id - b.id : b.id - a.id),
//     );

//     return (
//         <div style={{ maxWidth: 600 }} className="mx-auto">
//             {sortedUsers.map((user, index) => (
//                 <User key={user.id} user={user} />
//             ))}
//             <button
//                 style={{ border: "1px solid black" }}
//                 onClick={() => setSort((s) => (s === "asc" ? "desc" : "asc"))}
//             >
//                 sort
//             </button>
//         </div>
//     );
// }

// const User = memo(function User({ user }) {
//     const [count, setCount] = useState(0);

//     console.log(`render:user-${user.id}`);

//     return (
//         <div className="mb-1">
//             <span>{user.name}</span>
//             {"   "}
//             <button
//                 style={{ border: "1px solid black" }}
//                 onClick={() => setCount((c) => c + 1)}
//             >
//                 click
//             </button>
//             {"   "}
//             <span>{count}</span>
//             <input style={{ border: "1px solid black" }} />
//         </div>
//     );
// });
