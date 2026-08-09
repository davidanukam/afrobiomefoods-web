import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import { getFarmsPage } from "@/sanity/lib/load-query";

export const metadata: Metadata = {
  title: "Farms & Facilities",
  description:
    "From Clarke Road and Pleasant Valley to our Hamilton Road hub—AfroBiome’s local food pipeline from field to table.",
};

export default async function FarmsPage() {
  const page = await getFarmsPage();

  return (
    <SiteShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImageUrl}
      />

      <section className="section-pad mx-auto max-w-3xl py-16 sm:py-20">
        <FadeIn>
          <p className="text-lg leading-relaxed text-ink/80">{page.intro}</p>
        </FadeIn>
      </section>

      <div className="space-y-0">
        {(page.farms || []).map((farm, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={farm.slug || farm.name}
              id={farm.slug || undefined}
              className={index % 2 === 0 ? "bg-canvas" : "bg-canvas-deep"}
            >
              <div
                className={`section-pad mx-auto grid max-w-7xl items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeIn>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={farm.imageUrl}
                      alt={farm.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={100}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
                    {farm.city}
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
                    {farm.name}
                  </h2>
                  <p className="mt-4 text-lg text-ink/85">{farm.vibe}</p>
                  <p className="mt-6 text-base leading-relaxed text-ink/75">
                    <span className="font-semibold text-leaf">What we grow: </span>
                    {farm.grows}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink/75">
                    {farm.note}
                  </p>
                </FadeIn>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-leaf py-16 text-white sm:py-20">
        <div className="section-pad mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold">
              {page.processingHeadline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              {page.processingBody}
            </p>
            <div className="relative mx-auto mt-10 aspect-[21/9] max-w-4xl overflow-hidden">
              <Image
                src={page.processingImageUrl}
                alt="Fresh produce ready for packing"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionRenderer sections={page.sections} />
    </SiteShell>
  );
}
