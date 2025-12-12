import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
