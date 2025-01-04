import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-100 bg-opacity-60 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-black text-xl text-bold">
          <li>
            <Link
              href="#home"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#overview"
              className="hover:text-purple-600 transition-colors"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="#team"
              className="hover:text-blue-600 transition-colors"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="#technologies"
              className="hover:text-purple-600 transition-colors"
            >
              Technologies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
