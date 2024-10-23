import Link from "next/link";

const navItems = [
  { path: "/movies", text: "Peliculas" },
  { path: "/candy", text: "Candy" },
  { path: "/contact", text: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-violet-600 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <span>Icon Cineflix</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItems) => (
        <Link key={navItems.path} className="mr-2" href={navItems.path}>
          {navItems.text}
        </Link>
      ))}
    </nav>
  );
};
