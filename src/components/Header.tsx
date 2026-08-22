"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

export function Header({
  transparent = false,
  brandName,
  navLinks,
}: {
  transparent?: boolean;
  brandName: string;
  navLinks: NavLink[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !transparent || scrolled || open;
  const linkClass = solid
    ? "text-ink/75 hover:text-leaf"
    : "text-ink/85 hover:text-leaf"; // "text-white/85 hover:text-white"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid
          ? "border-b border-leaf/10 bg-canvas/95 backdrop-blur-md"
          : "border-b border-leaf/10 bg-canvas/95 backdrop-blur-md" // "bg-transparent"
        }`}
    >
      <div className="section-pad mx-auto flex max-w-7xl items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className={`font-display inline-flex gap-2.5 text-xl font-semibold hover:scale-105 transition duration-300 tracking-tight sm:text-2xl ${solid ? "text-leaf" : "text-leaf" // solid ? "text-leaf" : "text-white"
            }`}
        >
          <Image
            src="/AfroBiomeFoodsLogo.png"
            alt="AfroBiome Foods Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain rounded-sm"
          />
          <span>{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`group relative text-sm font-medium transition-colors duration-200 ${linkClass} ${active ? (solid ? "text-leaf" : "text-white") : ""
                  }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${active ? "scale-x-100" : ""
                    } ${solid ? "bg-leaf" : "bg-leaf"}`} // ${solid ? "bg-leaf" : "bg-white"}
                />
              </Link>
            );
          })}
          <Link
            href="/get-involved#donate"
            className={`rounded-md px-4 py-2 text-sm font-semibold hover:scale-105 transition ${solid
                ? "bg-leaf text-white hover:bg-leaf-mid"
                : "bg-leaf text-white hover:bg-leaf-mid" // "bg-white text-leaf hover:bg-fog"
              }`}
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-semibold transition duration-300 hover:scale-105 lg:hidden ${solid
              ? "border-leaf/20 text-leaf"
              : "border-leaf/20 text-leaf" //  "border-white/40 text-white"
            }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-leaf/10 bg-canvas section-pad py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="py-1 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              className="mt-2 inline-flex w-fit rounded-md bg-leaf px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
