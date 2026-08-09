import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { resolveImageUrl } from "@/sanity/lib/image";

export type CmsSection = {
  _key?: string;
  _type: string;
  [key: string]: unknown;
};

function toneClass(tone?: string) {
  if (tone === "leaf") return "bg-leaf text-white";
  if (tone === "tinted") return "bg-canvas-deep text-ink";
  return "bg-canvas text-ink";
}

function textMuted(tone?: string) {
  return tone === "leaf" ? "text-white/80" : "text-ink/75";
}

function textEyebrow(tone?: string) {
  return tone === "leaf" ? "text-white/55" : "text-earth";
}

function textTitle(tone?: string) {
  return tone === "leaf" ? "text-white" : "text-leaf";
}

export function SectionRenderer({ sections }: { sections?: CmsSection[] | null }) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section, index) => {
        const key = section._key || `${section._type}-${index}`;
        switch (section._type) {
          case "heroSection":
            return <HeroBlock key={key} section={section} />;
          case "textSection":
            return <TextBlock key={key} section={section} />;
          case "cardGridSection":
            return <CardGridBlock key={key} section={section} />;
          case "metricsSection":
            return <MetricsBlock key={key} section={section} />;
          case "imageTextSection":
            return <ImageTextBlock key={key} section={section} />;
          case "ctaSection":
            return <CtaBlock key={key} section={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}

function HeroBlock({ section }: { section: CmsSection }) {
  const imageUrl = resolveImageUrl(section.image as never, undefined, 2000);
  if (!imageUrl) {
    return (
      <section className="bg-leaf py-20 text-white sm:py-28">
        <div className="section-pad mx-auto max-w-7xl">
          {section.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              {String(section.eyebrow)}
            </p>
          ) : null}
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            {String(section.title || "")}
          </h2>
          {section.subtitle ? (
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              {String(section.subtitle)}
            </p>
          ) : null}
          {section.ctaLabel && section.ctaHref ? (
            <div className="mt-8">
              <ButtonLink href={String(section.ctaHref)} variant="light">
                {String(section.ctaLabel)}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <PageHero
      eyebrow={section.eyebrow ? String(section.eyebrow) : undefined}
      title={String(section.title || "")}
      subtitle={section.subtitle ? String(section.subtitle) : undefined}
      image={imageUrl}
    />
  );
}

function TextBlock({ section }: { section: CmsSection }) {
  const center = section.align === "center";
  const paragraphs = (section.paragraphs as string[]) || [];

  return (
    <section className="section-pad mx-auto max-w-7xl py-16 sm:py-24">
      <FadeIn>
        <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {section.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              {String(section.eyebrow)}
            </p>
          ) : null}
          {section.title ? (
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
              {String(section.title)}
            </h2>
          ) : null}
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function CardGridBlock({ section }: { section: CmsSection }) {
  const tone = String(section.tone || "default");
  const cols = Number(section.columns) === 2 ? 2 : 3;
  const cards = (section.cards as Array<Record<string, unknown>>) || [];

  return (
    <section className={toneClass(tone)}>
      <div className="section-pad mx-auto max-w-7xl py-16 sm:py-24">
        <FadeIn>
          {section.eyebrow ? (
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${textEyebrow(tone)}`}
            >
              {String(section.eyebrow)}
            </p>
          ) : null}
          {section.title ? (
            <h2
              className={`font-display mt-3 text-3xl font-semibold sm:text-4xl ${textTitle(tone)}`}
            >
              {String(section.title)}
            </h2>
          ) : null}
          {section.intro ? (
            <p className={`mt-4 max-w-2xl text-base ${textMuted(tone)}`}>
              {String(section.intro)}
            </p>
          ) : null}
        </FadeIn>
        <div
          className={`mt-12 grid gap-8 ${
            cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {cards.map((card, i) => {
            const imageUrl = resolveImageUrl(card.image as never);
            const title = String(card.title || "");
            return (
              <FadeIn key={String(card._key || title || i)} delay={i * 60}>
                <article
                  className={
                    tone === "leaf"
                      ? "border-t border-white/20 pt-5"
                      : "border-t border-leaf/15 pt-5"
                  }
                >
                  {imageUrl ? (
                    <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <h3
                    className={`font-display text-xl font-semibold sm:text-2xl ${textTitle(tone)}`}
                  >
                    {title}
                  </h3>
                  {card.subtitle ? (
                    <p
                      className={`mt-1 text-xs font-medium uppercase tracking-[0.12em] ${textEyebrow(tone)}`}
                    >
                      {String(card.subtitle)}
                    </p>
                  ) : null}
                  {card.body ? (
                    <p className={`mt-3 text-sm leading-relaxed ${textMuted(tone)}`}>
                      {String(card.body)}
                    </p>
                  ) : null}
                  {card.href ? (
                    <Link
                      href={String(card.href)}
                      className={`mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline ${
                        tone === "leaf" ? "text-white" : "text-leaf-mid"
                      }`}
                    >
                      {String(card.linkLabel || "Learn more →")}
                    </Link>
                  ) : null}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricsBlock({ section }: { section: CmsSection }) {
  const tone = String(section.tone || "leaf");
  const metrics =
    (section.metrics as Array<{
      value: number;
      suffix?: string;
      label: string;
      detail?: string;
    }>) || [];

  return (
    <section className={toneClass(tone)}>
      <div className="section-pad mx-auto max-w-7xl py-16 sm:py-24">
        <FadeIn>
          {section.eyebrow ? (
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${textEyebrow(tone)}`}
            >
              {String(section.eyebrow)}
            </p>
          ) : null}
          {section.title ? (
            <h2
              className={`font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl ${textTitle(tone)}`}
            >
              {String(section.title)}
            </h2>
          ) : null}
        </FadeIn>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 80}>
              <p
                className={`font-display text-5xl font-semibold tracking-tight sm:text-6xl ${textTitle(tone)}`}
              >
                <CountUp value={metric.value} suffix={metric.suffix || ""} />
              </p>
              <p
                className={`mt-3 text-sm font-semibold uppercase tracking-[0.12em] ${textEyebrow(tone)}`}
              >
                {metric.label}
              </p>
              {metric.detail ? (
                <p className={`mt-3 text-sm ${textMuted(tone)}`}>{metric.detail}</p>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageTextBlock({ section }: { section: CmsSection }) {
  const imageUrl = resolveImageUrl(section.image as never);
  const imageRight = section.imagePosition === "right";

  return (
    <section className="bg-canvas-deep">
      <div
        className={`section-pad mx-auto grid max-w-7xl items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16 ${
          imageRight ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden bg-leaf/10">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={String(section.title || "")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : null}
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          {section.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth">
              {String(section.eyebrow)}
            </p>
          ) : null}
          {section.title ? (
            <h2 className="font-display mt-3 text-3xl font-semibold text-leaf sm:text-4xl">
              {String(section.title)}
            </h2>
          ) : null}
          {section.body ? (
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              {String(section.body)}
            </p>
          ) : null}
          {section.ctaLabel && section.ctaHref ? (
            <div className="mt-8">
              <ButtonLink href={String(section.ctaHref)}>
                {String(section.ctaLabel)}
              </ButtonLink>
            </div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}

function CtaBlock({ section }: { section: CmsSection }) {
  const tone = String(section.tone || "leaf");

  return (
    <section className={toneClass(tone)}>
      <div className="section-pad mx-auto max-w-3xl py-16 text-center sm:py-20">
        <FadeIn>
          {section.title ? (
            <h2
              className={`font-display text-3xl font-semibold sm:text-4xl ${textTitle(tone)}`}
            >
              {String(section.title)}
            </h2>
          ) : null}
          {section.body ? (
            <p className={`mt-4 text-base ${textMuted(tone)}`}>
              {String(section.body)}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {section.primaryLabel && section.primaryHref ? (
              <ButtonLink
                href={String(section.primaryHref)}
                variant={tone === "leaf" ? "light" : "primary"}
              >
                {String(section.primaryLabel)}
              </ButtonLink>
            ) : null}
            {section.secondaryLabel && section.secondaryHref ? (
              <ButtonLink
                href={String(section.secondaryHref)}
                variant={tone === "leaf" ? "secondary" : "outline"}
              >
                {String(section.secondaryLabel)}
              </ButtonLink>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
