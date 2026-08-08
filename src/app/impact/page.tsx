import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { images, impactMetrics } from "@/content/site";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "Pounds of food distributed, families supported, and volunteer hours—AfroBiome’s social return for Southwestern Ontario.",
};

export default function ImpactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Community Impact"
        title="Impact You Can Taste"
        subtitle="Social return for donors, partners, and grant-makers—measured in meals, families, and shared labour."
        image={images.impact}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {impactMetrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 100}>
              <p className="font-display text-5xl font-semibold tracking-tight text-leaf sm:text-6xl">
                <CountUp value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-earth">
                {metric.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {metric.detail}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-canvas-deep">
        <div className="section-pad mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.involved}
                alt="Community food distribution"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              Food Box Program
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
              Culturally Relevant Food Boxes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              Low-income families in London and surrounding areas access
              subsidized or free baskets of heritage vegetables—fresh from our
              farms, packed at Hamilton Road, and delivered with dignity.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              We partner with local food banks, Black-led community groups, and
              cultural associations to widen access across Southwestern Ontario.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-3xl py-20 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            Social return
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
            Every $10 grows roughly 3 pounds of heritage vegetables
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            Donations cultivate and distribute fresh African heritage vegetables
            directly to diaspora families—shortening food miles, boosting local
            agriculture, and preserving culinary legacy.
          </p>
          <div className="mt-8">
            <ButtonLink href="/get-involved#donate">
              Support our mission
            </ButtonLink>
          </div>
        </FadeIn>
      </section>
    </SiteShell>
  );
}
