"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useApp } from "@/components/providers/app-provider";
import { LOCALES } from "@/lib/i18n";

function navLinkClass(isActive: boolean): string {
  const base =
    "relative inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200";
  if (isActive) {
    return `${base} text-[var(--brand-red)]`;
  }
  return `${base} text-[var(--ink-soft)] hover:text-[var(--brand-red)]`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, dictionary } = useApp();

  const navItems = [
    { href: "/", label: dictionary.nav.home },
    { href: "/menu", label: dictionary.nav.menu },
    { href: "/about", label: dictionary.nav.about },
    { href: "/partners", label: dictionary.nav.partners },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[var(--brand-red)] shadow-sm sm:h-10 sm:w-10">
            <Image
              src="/hero-logo.png"
              alt="Holy Pav logo"
              width={1024}
              height={1024}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              priority
            />
          </span>
          <span className="font-display text-xl tracking-[0.02em] text-[var(--ink-strong)] sm:text-2xl">
            HOLY PAV
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={navLinkClass(isActive)}>
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-full bg-[var(--brand-red)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="inline-flex items-center gap-0.5 rounded-full border border-[var(--line-strong)] bg-[var(--paper)]/60 p-0.5">
          {LOCALES.map((value) => {
            const isActive = value === locale;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setLocale(value)}
                aria-label={`Switch language to ${value === "en" ? "English" : "Kannada"}`}
                className={
                  isActive
                    ? "rounded-full bg-[var(--ink-strong)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--paper)] transition-colors"
                    : "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink-strong)]"
                }
              >
                {value === "en" ? "EN" : "ಕ"}
              </button>
            );
          })}
        </div>
      </div>

      <nav className="border-t border-[var(--line)] md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1 overflow-x-auto px-5 py-2.5 sm:px-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 ${navLinkClass(isActive)}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
