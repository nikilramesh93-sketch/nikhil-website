import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip text-slate-800">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-90"
      >
        <div className="absolute left-[-10rem] top-16 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-[-8rem] top-44 h-72 w-72 rounded-full bg-amber-100/80 blur-3xl" />
        <div className="absolute bottom-16 right-12 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />
      </div>

      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
