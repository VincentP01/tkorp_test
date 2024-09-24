// components/Navbar.js
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-slate-100 text-black mb-8">
      <ul className="flex list-none m-0 p-0">
        <li className="mx-4">
          <Link
            href="/"
            className="hover:bg-slate-300 text-black no-underline font-[family-name:var(--font-geist-mono)]"
          >
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link
            href="/owners"
            className="text-black no-underline font-[family-name:var(--font-geist-mono)]"
          >
            Owners
          </Link>
        </li>
        <li className="mr-4">
          <Link
            href="/animals"
            className="text-black no-underline font-[family-name:var(--font-geist-mono)]"
          >
            Animals
          </Link>
        </li>
      </ul>
    </nav>
  );
}
