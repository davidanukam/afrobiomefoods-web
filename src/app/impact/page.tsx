import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import { getImpactPage } from "@/sanity/lib/load-query";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "Pounds of food distributed, families supported, and volunteer hours—AfroBiome’s social return for Southwestern Ontario.",
};

export default async function ImpactPage() {
  const page = await getImpactPage();

  return (
    <SiteShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImageUrl}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {(page.metrics || []).map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 100}>
              <p className="font-display text-5xl font-semibold tracking-tight text-leaf sm:text-6xl">
                <CountUp value={metric.value} suffix={metric.suffix || ""} />
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
                src={page.foodBoxImageUrl}
                alt="Community food distribution"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              {page.foodBoxEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
              {page.foodBoxHeadline}
            </h2>
            {(page.foodBoxBody || []).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-5 text-base leading-relaxed text-ink/75"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-3xl py-20 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            {page.sroiEyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
            {page.sroiHeadline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            {page.sroiBody}
          </p>
          <div className="mt-8">
            <ButtonLink href="/get-involved#donate">
              {page.sroiCtaLabel}
            </ButtonLink>
          </div>
        </FadeIn>
      </section>

      <SectionRenderer sections={page.sections} />
    </SiteShell>
  );
}
