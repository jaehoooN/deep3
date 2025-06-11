import { Link } from "react-router-dom";
import links from "./data/links.json";

export default function App() {
  const mainLinks = links.slice(0, 10);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {mainLinks.map((entry) => (
          <Link
            key={entry.id}
            to={`/${entry.id}`}
            className="bg-black text-white py-4 px-6 text-center text-lg font-medium rounded hover:opacity-80 transition"
          >
            {entry.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
