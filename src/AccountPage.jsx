import { useParams, Link } from "react-router-dom";
import links from "./data/links.json";

const BUTTONS = ["오늘의 뉴스", "오늘의 일정", "회의자료 열람", "앱 접속"];

export default function AccountPage() {
  const { accountId } = useParams();
  const account = links.find((l) => l.id === accountId);
  if (!account) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        존재하지 않는 계정입니다.<br />
        <Link to="/" className="text-blue-600 underline mt-4">메인으로 돌아가기</Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-xl font-semibold mb-6">{account.name}</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {BUTTONS.map((label, idx) => (
          <a
            key={idx}
            href={account.url}
            className="bg-black text-white aspect-square flex items-center justify-center rounded hover:opacity-80 transition"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
