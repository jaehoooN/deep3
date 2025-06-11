import links from "./data/links.json";

export default function App() {
  const mainLinks = links.slice(0, 10); // ex001~ex010만 표시
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {mainLinks.map((entry) => (
          <a
            key={entry.id}
            href={entry.url}
            target="_blank" // 딥링크 새 창(앱)으로 열림
            rel="noopener noreferrer"
            className="bg-black text-white py-4 px-6 text-center text-lg font-medium rounded hover:opacity-80 transition"
          >
            {entry.name}
          </a>
        ))}
      </div>
    </div>
  );
}
