"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export function Header({
  transparent = false,
  brandName,
}: {
  transparent?: boolean;
  brandName: string;
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
    : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-leaf/10 bg-canvas/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex max-w-7xl items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
            solid ? "text-leaf" : "text-white"
          }`}
        >
          {brandName}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${linkClass} ${
                  active ? (solid ? "text-leaf" : "text-white") : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/get-involved#donate"
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              solid
                ? "bg-leaf text-white hover:bg-leaf-mid"
                : "bg-white text-leaf hover:bg-fog"
            }`}
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-semibold lg:hidden ${
            solid
              ? "border-leaf/20 text-leaf"
              : "border-white/40 text-white"
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
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              className="mt-2 inline-flex w-fit rounded-md bg-leaf px-4 py-2 text-sm font-semibold text-white"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
