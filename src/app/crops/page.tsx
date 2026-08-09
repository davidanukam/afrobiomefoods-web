import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { getCropsPage } from "@/sanity/lib/load-query";

export const metadata: Metadata = {
  title: "Our Crops",
  description:
    "Heritage leafy greens and vegetables—Amaranth, Ugu, Ewedu, Garden Eggs, and more—grown chemical-free in Southwestern Ontario.",
};

function CropGrid({
  items,
}: {
  items: { name: string; aka: string; blurb: string }[];
}) {
  return (
    <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
      {items.map((crop, i) => (
        <FadeIn key={crop.name} delay={i * 50}>
          <article className="border-t border-leaf/15 pt-6">
            <h3 className="font-display text-2xl font-semibold text-leaf">
              {crop.name}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-earth">
              {crop.aka}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              {crop.blurb}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

export default async function CropsPage() {
  const page = await getCropsPage();

  return (
    <SiteShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImageUrl}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            {page.leafyEyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
            {page.leafyHeadline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            {page.leafyIntro}
          </p>
        </FadeIn>
        <CropGrid items={page.leafyGreens || []} />
      </section>

      <section className="bg-canvas-deep">
        <div className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              {page.vegEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
              {page.vegHeadline}
            </h2>
          </FadeIn>
          <CropGrid items={page.vegetables || []} />
        </div>
      </section>

      <section className="section-pad mx-auto max-w-3xl py-20 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            {page.qualityEyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
            {page.qualityHeadline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            {page.qualityBody}
          </p>
        </FadeIn>
      </section>
    </SiteShell>
  );
}
