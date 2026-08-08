import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { donationTiers, images, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer at Clarke Road or Pleasant Valley, donate to food boxes and farm tools, or partner with AfroBiome Foods.",
};

export default function GetInvolvedPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get Involved"
        title="Grow with us"
        subtitle="Whether you want to get your hands dirty, fund a family’s food supply, or partner for food justice—there is a place for you."
        image={images.involved}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-3">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              01
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-leaf sm:text-3xl">
              Volunteer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Get your hands dirty at Clarke Road (London) or Pleasant Valley
              (Aylmer)—planting, weeding, harvesting—or help sort and pack at
              Hamilton Road. No farming experience required.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              <li>· On the farms: seasonal planting & harvest</li>
              <li>· At the hub: wash, sort & pack food boxes</li>
              <li>· In community: deliveries & learning circles</li>
            </ul>
            <a
              href={`mailto:${site.email}?subject=Volunteer%20with%20AfroBiome`}
              className="mt-6 inline-flex text-sm font-semibold text-leaf-mid underline-offset-4 hover:underline"
            >
              Apply to volunteer →
            </a>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              02
            </p>
            <h2
              id="donate"
              className="font-display mt-3 scroll-mt-28 text-2xl font-semibold text-leaf sm:text-3xl"
            >
              Donate
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Every dollar fuels food sovereignty—seeds, tools, greenhouse heat,
              and subsidized boxes for households who need them most.
            </p>
            <ul className="mt-6 space-y-4">
              {donationTiers.map((tier) => (
                <li key={tier.amount} className="border-t border-leaf/15 pt-4">
                  <p className="font-display text-xl font-semibold text-leaf">
                    {tier.amount}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {tier.result}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href={`mailto:${site.email}?subject=Donation%20to%20AfroBiome`}
              >
                Donate securely
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              03
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-leaf sm:text-3xl">
              Partner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Collaborate with municipal programs, food banks, housing
              providers, corporate sponsors, and research partners to strengthen
              inclusive food systems in London and beyond.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              <li>· Supply culturally specific greens to pantries</li>
              <li>· Sponsor a harvest field or delivery route</li>
              <li>· Corporate volunteer days at Clarke Road</li>
            </ul>
            <a
              href={`mailto:${site.partnerEmail}?subject=Partnership%20Inquiry`}
              className="mt-6 inline-flex text-sm font-semibold text-leaf-mid underline-offset-4 hover:underline"
            >
              Inquire about partnering →
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="bg-leaf py-16 text-white sm:py-20">
        <div className="section-pad mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold">
              Stay rooted in the community
            </h2>
            <p className="mt-4 text-base text-white/80">
              Seasonal harvest updates, volunteer opportunities, and traditional
              recipes that taste like home.
            </p>
            <div className="mt-8">
              <ButtonLink href={`mailto:${site.email}`} variant="light">
                Join our circle
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteShell>
  );
}
