import React from "react";
import Sidebar from "./sidebar/Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex bg-zinc-950 h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
