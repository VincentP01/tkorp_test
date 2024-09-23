// components/Navbar.js
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex list-none m-0 p-0">
        <li className="mr-4">
          <Link href="/" className="text-white no-underline">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/persons" className="text-white no-underline">
            Owners
          </Link>
        </li>
      </ul>
    </nav>
  );
}
