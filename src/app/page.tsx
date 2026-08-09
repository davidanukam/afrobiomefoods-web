import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import { getHomePage, getImpactPage, getCropsPage } from "@/sanity/lib/load-query";

export default async function HomePage() {
  const [page, impact, crops] = await Promise.all([
    getHomePage(),
    getImpactPage(),
    getCropsPage(),
  ]);
  const cropTeasers = (crops.leafyGreens || []).slice(0, 6);
  const metrics = impact.metrics || [];

  return (
    <SiteShell transparentHeader>
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-leaf">
        <Image
          src={page.heroImageUrl}
          alt="Community members packing fresh produce together"
          fill
          priority
          className="object-cover hero-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf via-leaf/50 to-black/25" />
        <div className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-16 pt-32 sm:pb-20">
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {page.heroBrand}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {page.heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {page.heroSubhead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/get-involved#donate" variant="light">
              {page.heroCtaLabel}
            </ButtonLink>
            <ButtonLink href="/story" variant="secondary">
              {page.heroSecondaryCtaLabel}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            {page.problemEyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold text-leaf sm:text-4xl">
            {page.problemHeadline}
          </h2>
          <p className="prose-afro mt-6 text-lg leading-relaxed text-ink/80">
            {page.problemBody}
          </p>
        </FadeIn>
      </section>

      <section className="bg-canvas-deep">
        <div className="section-pad mx-auto grid max-w-7xl gap-12 py-20 sm:py-24 md:grid-cols-3 md:gap-10">
          {(page.pillars || []).map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 100}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-earth">
                0{i + 1}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-leaf">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                {pillar.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
                {page.cropsEyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
                {page.cropsHeadline}
              </h2>
            </div>
            <Link
              href="/crops"
              className="text-sm font-semibold text-leaf-mid underline-offset-4 hover:underline"
            >
              Explore our crops →
            </Link>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cropTeasers.map((crop, i) => (
            <FadeIn key={crop.name} delay={i * 60}>
              <article className="border-t border-leaf/15 pt-5">
                <h3 className="font-display text-xl font-semibold text-leaf">
                  {crop.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-earth">
                  {crop.aka}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {crop.blurb}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-leaf py-20 text-white sm:py-24">
        <div className="section-pad relative z-10 mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              {page.impactEyebrow}
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              {page.impactHeadline}
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {metrics.map((metric, i) => (
              <FadeIn key={metric.label} delay={i * 100}>
                <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  <CountUp value={metric.value} suffix={metric.suffix || ""} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                  {metric.label}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12">
            <ButtonLink href="/impact" variant="light">
              See our impact
            </ButtonLink>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
                {page.involvedEyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
                {page.involvedHeadline}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/75">
                {page.involvedBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/get-involved">Get Involved</ButtonLink>
                <ButtonLink href="/get-involved#donate" variant="outline">
                  Donate
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={page.involvedImageUrl}
                alt="Volunteers working together outdoors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <SectionRenderer sections={page.sections} />
    </SiteShell>
  );
}
