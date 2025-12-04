"use client";

import HomeHeader from "@/components/layout/header/HomeHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-layout min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <HomeHeader />
      <main className="main">{children}</main>
    </div>
  );
}
