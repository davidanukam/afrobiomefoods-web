import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import { getDirectorsPage } from "@/sanity/lib/load-query";

export const metadata: Metadata = {
  title: "Directors",
  description:
    "Meet the directors who guide AfroBiome Foods: strategy, research, farm operations, and community outreach in Southwestern Ontario.",
};

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default async function DirectorsPage() {
  const page = await getDirectorsPage();
  const people = page.people || [];

  return (
    <SiteShell>
      {page.heroImageUrl ? (
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          subtitle={page.subtitle}
          image={page.heroImageUrl}
        />
      ) : (
        <section className="bg-canvas pt-28 pb-8 sm:pt-32 sm:pb-10">
          <div className="section-pad mx-auto max-w-7xl">
            <FadeIn>
              {page.eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
                  {page.eyebrow}
                </p>
              ) : null}
              <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold text-leaf sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              {page.subtitle ? (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
                  {page.subtitle}
                </p>
              ) : null}
            </FadeIn>
          </div>
        </section>
      )}

      <section className="section-pad mx-auto max-w-7xl pb-20 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {people.map((person, i) => (
            <FadeIn key={person.name} delay={i * 80}>
              <article className="h-full overflow-hidden rounded-3xl bg-white/80 shadow-[0_18px_50px_-28px_rgba(27,67,50,0.45)] ring-1 ring-leaf/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-leaf/10 sm:aspect-[5/4]">
                  {person.photoUrl ? (
                    <Image
                      src={person.photoUrl}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition duration-300 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-leaf text-white">
                      <span className="font-display text-5xl font-semibold">
                        {initials(person.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="px-6 py-7 sm:px-8 sm:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
                    {person.name}
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-semibold text-leaf sm:text-3xl">
                    {person.role}
                  </h2>
                  {person.bio ? (
                    <p className="mt-4 text-base leading-relaxed text-ink/75">
                      {person.bio}
                    </p>
                  ) : null}
                  <div className="mt-6 space-y-2 text-sm">
                    {(person.emails || []).map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block font-medium text-leaf-mid underline-offset-4 hover:underline"
                      >
                        {email}
                      </a>
                    ))}
                    {person.phone ? (
                      <a
                        href={telHref(person.phone)}
                        className="block font-medium text-leaf-mid underline-offset-4 hover:underline"
                      >
                        {person.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-leaf py-16 text-white sm:py-20">
        <div className="section-pad mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold">
              Work with the team
            </h2>
            <p className="mt-4 text-base text-white/80">
              Volunteer, donate, or partner with AfroBiome Foods to grow culturally relevant vegetables for our communities.
            </p>
            <div className="mt-8">
              <ButtonLink href="/get-involved" variant="light">
                Get involved
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionRenderer sections={page.sections} />
    </SiteShell>
  );
}
