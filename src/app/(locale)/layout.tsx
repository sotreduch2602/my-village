"use client";

import HomeHeader from "@/components/layout/header/HomeHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen relative">
      <div className="main-layout bg-linear-to-br from-slate-50 to-slate-100">
        <HomeHeader className="shadow-sm" />
      </div>
      <div className="pt-16">{children}</div>
    </main>
  );
}
