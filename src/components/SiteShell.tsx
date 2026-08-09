import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteSettings } from "@/sanity/lib/load-query";

export async function SiteShell({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  const settings = await getSiteSettings();

  return (
    <>
      <Header transparent={transparentHeader} brandName={settings.name} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
    </>
  );
}
