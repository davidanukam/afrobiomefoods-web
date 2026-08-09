import Link from "next/link";
import { nav } from "@/content/site";
import { fallbackSiteSettings } from "@/sanity/lib/fallbacks";

type SiteSettings = typeof fallbackSiteSettings;

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-leaf/10 bg-leaf text-white">
      <div className="section-pad mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">{settings.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
            {settings.footerBlurb}
          </p>
          <p className="mt-6 text-sm text-white/65">
            <a
              href={`mailto:${settings.email}`}
              className="underline-offset-4 hover:text-white hover:underline"
            >
              {settings.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
            Locations
          </p>
          <ul className="mt-4 space-y-3">
            {(settings.locations || []).map((loc) => (
              <li key={loc.name} className="text-sm text-white/80">
                <span className="font-medium text-white">{loc.name}</span>
                <br />
                {loc.city}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-pad border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-xl">{settings.newsletterHeading}</p>
            <p className="mt-2 text-sm text-white/70">{settings.newsletterBody}</p>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            action={`mailto:${settings.email}`}
            method="get"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="body"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-leaf transition hover:bg-fog"
            >
              Join our circle
            </button>
          </form>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-xs text-white/45">
          © {new Date().getFullYear()} {settings.legalName}. Non-profit
          organization.
        </p>
      </div>
    </footer>
  );
}
