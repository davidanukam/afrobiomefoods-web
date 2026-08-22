import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import { getStoryPage } from "@/sanity/lib/load-query";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Rooted in heritage, growing for the future. AfroBiome Foods fosters food sovereignty for African and Black diaspora communities in Southwestern Ontario.",
};

export default async function StoryPage() {
  const page = await getStoryPage();

  return (
    <SiteShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImageUrl}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <div className="prose-afro mx-auto text-lg leading-relaxed text-ink/80">
            {(page.intro || []).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="bg-canvas-deep">
        <div className="section-pad mx-auto grid max-w-7xl gap-12 py-20 sm:grid-cols-2 sm:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              {page.missionEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
              {page.missionHeadline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              {page.missionBody}
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              {page.visionEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
              {page.visionHeadline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              {page.visionBody}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            {page.pillarsEyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-leaf sm:text-4xl">
            {page.pillarsHeadline}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {(page.pillars || []).map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 90}>
              <h3 className="font-display text-2xl font-semibold text-leaf">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                {pillar.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
            <Image
              src={page.cultureImageUrl}
              alt="Fresh leafy greens and vegetables"
              fill
              className="object-cover transition duration-300 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center bg-leaf px-8 py-16 text-white sm:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                {page.cultureEyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold">
                {page.cultureHeadline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                {page.cultureBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionRenderer sections={page.sections} />
    </SiteShell>
  );
}
