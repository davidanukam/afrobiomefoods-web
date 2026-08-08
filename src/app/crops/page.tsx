import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { images, leafyGreens, vegetables } from "@/content/site";

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

export default function CropsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Crops"
        title="Produce & Products"
        subtitle="Heritage leafy greens and vegetables grown with care across our London and Aylmer farms."
        image={images.crops}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            Heritage leafy greens
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
            The heart of our cultivation
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
            Nutrient-dense building blocks of traditional African cooking—grown
            for flavour and culture, not long-haul shelf life.
          </p>
        </FadeIn>
        <CropGrid items={leafyGreens} />
      </section>

      <section className="bg-canvas-deep">
        <div className="section-pad mx-auto max-w-7xl py-20 sm:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              Vegetables & pods
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
              Sun-loving crops from Pleasant Valley
            </h2>
          </FadeIn>
          <CropGrid items={vegetables} />
        </div>
      </section>

      <section className="section-pad mx-auto max-w-3xl py-20 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            Quality standards
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
            Chemical-free growing. Careful packing.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            We farm with an organic-first mentality—no synthetic preservatives
            on the plate. At Hamilton Road, greens are triple-washed and
            packaged to lock in moisture and traditional flavour from field to
            family table.
          </p>
        </FadeIn>
      </section>
    </SiteShell>
  );
}
