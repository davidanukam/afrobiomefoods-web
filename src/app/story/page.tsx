import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { images, storyPillars } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Rooted in heritage, growing for the future—AfroBiome Foods fosters food sovereignty for African and Black diaspora communities in Southwestern Ontario.",
};

export default function StoryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Story"
        title="Rooted in Heritage, Growing for the Future"
        subtitle="Food is more than sustenance—it is memory, medicine, and a direct connection to where we come from."
        image={images.story}
      />

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <div className="prose-afro mx-auto text-lg leading-relaxed text-ink/80">
            <p>
              For the vibrant African and Black diaspora communities in
              Southwestern Ontario, accessing fresh, high-quality, culturally
              relevant vegetables hasn’t always been easy. Too often, traditional
              greens like Efo Shoko, Ewedu, and Gboma arrive thousands of miles
              away—wilted, heavily preserved, or priced out of reach.
            </p>
            <p>
              At AfroBiome Foods Incorporated, we decided it was time to change
              that story. We are a nonprofit reclaiming food sovereignty by
              cultivating African-based, culturally significant vegetables right
              here in Ontario soil—from seed to harvest, processing to
              distribution.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="bg-canvas-deep">
        <div className="section-pad mx-auto grid max-w-7xl gap-12 py-20 sm:grid-cols-2 sm:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              Mission
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
              Food justice, sovereignty, and wellness
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              To foster food justice, sovereignty, and wellness within African
              and Black diaspora communities by providing direct, affordable
              access to fresh, locally grown, and culturally relevant
              vegetables.
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              Vision
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf">
              Never compromise on heritage foods
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              A future where every member of our community has a reliable,
              affordable connection to the traditional foods that nourish both
              body and soul—grown sustainably, processed safely, and shared
              generously.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
            The pillars that guide us
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-leaf sm:text-4xl">
            Culture, land, and care—held together.
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {storyPillars.map((pillar, i) => (
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
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src={images.crops}
              alt="Fresh leafy greens and vegetables"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center bg-leaf px-8 py-16 text-white sm:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Culturally relevant foods
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold">
                Food is medicine—and identity.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Food banks and commercial groceries rarely stock the greens our
                communities cook with. By growing them locally, we close that
                gap with dignity: fresh, familiar, and affordable.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
