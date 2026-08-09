import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/components/SectionRenderer";
import { SiteShell } from "@/components/SiteShell";
import {
  getCustomPage,
  getCustomPageSlugs,
} from "@/sanity/lib/load-query";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getCustomPageSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getCustomPage(slug);
  if (!page) return { title: "Page" };
  return {
    title: page.title,
    description: page.description || undefined,
  };
}

export default async function CustomPage({ params }: Props) {
  const { slug } = await params;
  const page = await getCustomPage(slug);
  if (!page) notFound();

  return (
    <SiteShell>
      {!page.sections?.length ? (
        <section className="section-pad mx-auto max-w-3xl py-28">
          <h1 className="font-display text-4xl font-semibold text-leaf">
            {page.title}
          </h1>
          <p className="mt-4 text-ink/70">
            Add sections to this page in Sanity Studio to build it out.
          </p>
        </section>
      ) : (
        <SectionRenderer sections={page.sections} />
      )}
    </SiteShell>
  );
}
