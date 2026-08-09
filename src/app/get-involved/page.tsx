import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import { getGetInvolvedPage, getSiteSettings } from "@/sanity/lib/load-query";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer at Clarke Road or Pleasant Valley, donate to food boxes and farm tools, or partner with AfroBiome Foods.",
};

export default async function GetInvolvedPage() {
  const [page, settings] = await Promise.all([
    getGetInvolvedPage(),
    getSiteSettings(),
  ]);

  return (
    <SiteShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImageUrl}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-3">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              01
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-leaf sm:text-3xl">
              {page.volunteerTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              {page.volunteerBody}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              {(page.volunteerBullets || []).map((item) => (
                <li key={item}>· {item.replace(/^·\s*/, "")}</li>
              ))}
            </ul>
            <a
              href={`mailto:${settings.email}?subject=Volunteer%20with%20AfroBiome`}
              className="mt-6 inline-flex text-sm font-semibold text-leaf-mid underline-offset-4 hover:underline"
            >
              {page.volunteerCtaLabel}
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
              {page.donateTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              {page.donateBody}
            </p>
            <ul className="mt-6 space-y-4">
              {(page.donationTiers || []).map((tier) => (
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
                href={`mailto:${settings.email}?subject=Donation%20to%20AfroBiome`}
              >
                {page.donateCtaLabel}
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              03
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-leaf sm:text-3xl">
              {page.partnerTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              {page.partnerBody}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              {(page.partnerBullets || []).map((item) => (
                <li key={item}>· {item.replace(/^·\s*/, "")}</li>
              ))}
            </ul>
            <a
              href={`mailto:${settings.partnerEmail}?subject=Partnership%20Inquiry`}
              className="mt-6 inline-flex text-sm font-semibold text-leaf-mid underline-offset-4 hover:underline"
            >
              {page.partnerCtaLabel}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="bg-leaf py-16 text-white sm:py-20">
        <div className="section-pad mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold">
              {page.newsletterHeadline}
            </h2>
            <p className="mt-4 text-base text-white/80">{page.newsletterBody}</p>
            <div className="mt-8">
              <ButtonLink href={`mailto:${settings.email}`} variant="light">
                {page.newsletterCtaLabel}
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionRenderer sections={page.sections} />
    </SiteShell>
  );
}
