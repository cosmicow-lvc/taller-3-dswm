import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

import Sidebar from "@/components/layout/Sidebar"; 
import StoreProvider from "@/components/StoreProvider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataMobile PG",
  description: "Taller 3 con PostgreSQL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex h-screen bg-gray-900 text-gray-100 overflow-hidden`}>
        <StoreProvider>
            <aside className="hidden md:flex w-64 flex-shrink-0 h-full border-r border-gray-800">
               <Sidebar />
            </aside>
            <main className="flex-1 h-full overflow-y-auto w-full">
                <nav className="md:hidden bg-gray-800 p-4 flex justify-around border-b border-gray-700 mb-4 sticky top-0 z-10">
                    <a href="/dashboard" className="text-sm font-bold text-white">Dashboard</a>
                    <a href="/registros" className="text-sm font-bold text-blue-400">Registros</a>
                </nav>
              {children}
            </main>
        </StoreProvider>
      </body>
    </html>
  );
}