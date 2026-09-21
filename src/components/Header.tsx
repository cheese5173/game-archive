import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          GAME ARCHIVE
        </Link>
        <nav className="flex gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/games" className="hover:text-white transition-colors">GAMES</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
        </nav>
      </div>
    </header>
  );
}