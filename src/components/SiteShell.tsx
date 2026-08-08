import { Header } from "@/components/Header";

export function SiteShell({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <>
      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
    </>
  );
}
