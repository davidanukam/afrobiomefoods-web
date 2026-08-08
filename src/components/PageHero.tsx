import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-leaf pt-28 pb-14 sm:min-h-[64vh] sm:pb-16">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover hero-ken-burns"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-leaf via-leaf/55 to-leaf/25" />
      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
