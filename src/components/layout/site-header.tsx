"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useApp } from "@/components/providers/app-provider";
import { LOCALES } from "@/lib/i18n";

function navClass(isActive: boolean): string {
  if (isActive) {
    return "rounded-full border border-orange-500 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm";
  }

  return "rounded-full border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-300 hover:bg-slate-100";
}

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, dictionary, cartItems, wishlistItems } = useApp();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { href: "/", label: dictionary.nav.home },
    { href: "/menu", label: dictionary.nav.menu },
    { href: "/cart", label: `${dictionary.nav.cart} (${cartCount})` },
    { href: "/wishlist", label: `${dictionary.nav.wishlist} (${wishlistItems.length})` },
    { href: "/checkout", label: dictionary.nav.checkout },
    { href: "/partners", label: dictionary.nav.partners },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-orange-200 bg-white shadow-sm">
              <Image
                src="/hero-logo.png"
                alt="Holy Pav logo"
                width={1024}
                height={1024}
                className="h-10 w-10 object-contain"
                priority
              />
            </span>
            <span>
              <span className="block font-display text-4xl leading-[0.85] tracking-[0.02em] text-orange-700">
                HOLY PAV
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                {dictionary.brand.city}
              </span>
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 p-1">
            {LOCALES.map((value) => {
              const isActive = value === locale;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLocale(value)}
                  className={
                    isActive
                      ? "rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white"
                      : "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600"
                  }
                >
                  {value === "en" ? "EN" : "ಕನ್ನಡ"}
                </button>
              );
            })}
          </div>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link key={item.href} href={item.href} className={navClass(isActive)}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
