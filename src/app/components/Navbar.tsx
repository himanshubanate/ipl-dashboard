import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#19398a] text-white py-4 px-6 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <h4 className="text-2xl font-semibold">CrickZilla</h4>
        </Link>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/matches" className="hover:text-gray-400">
              Matches
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-gray-400">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/stats" className="hover:text-gray-400">
              Stats
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-gray-400">
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
