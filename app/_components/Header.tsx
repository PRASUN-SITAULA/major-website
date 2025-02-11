import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Overview",
      href: "/#overview",
    },
    {
      name: "Team",
      href: "/#team",
    },
    {
      name: "Technologies",
      href: "/#technologies",
    },
    {
      name: "Methodology",
      href: "/methodology",
    },
    {
      name: "Progress",
      href: "/progress",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-100 bg-opacity-60 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-black text-xl text-bold">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                key={index}
                href={item.href}
                className="hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
