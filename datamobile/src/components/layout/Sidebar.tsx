"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-5 hidden md:block">
      <h2 className="text-xl font-bold mb-8">DataMobile</h2>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link href="/registros" className="hover:text-blue-300">Registros</Link>
      </nav>
    </div>
  );
}
