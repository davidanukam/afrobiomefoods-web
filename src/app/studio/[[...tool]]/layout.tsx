export const metadata = {
  title: "Studio | AfroBiome Foods",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-white text-black">{children}</div>
  );
}
