import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getNavLinks, getSiteSettings } from "@/sanity/lib/load-query";

export async function SiteShell({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  const [settings, navLinks] = await Promise.all([
    getSiteSettings(),
    getNavLinks(),
  ]);

  return (
    <>
      <Header
        transparent={transparentHeader}
        brandName={settings.name}
        navLinks={navLinks}
      />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} navLinks={navLinks} />
    </>
  );
}
