// components/Navbar.js
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-slate-100 text-black mb-8">
      <ul className="flex list-none m-0 p-0">
        <li className="mx-4">
          <Link href="/" className="text-black no-underline">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/owners" className="text-black no-underline">
            Owners
          </Link>
        </li>
      </ul>
    </nav>
  );
}
