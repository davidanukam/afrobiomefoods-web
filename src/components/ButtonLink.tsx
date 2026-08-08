import Link from "next/link";

const variants = {
  primary:
    "bg-leaf text-white hover:bg-leaf-mid focus-visible:outline-leaf-bright",
  secondary:
    "bg-transparent text-white border border-white/70 hover:bg-white/10 focus-visible:outline-white",
  outline:
    "bg-transparent text-leaf border border-leaf/30 hover:border-leaf hover:bg-leaf/5 focus-visible:outline-leaf",
  light:
    "bg-white text-leaf hover:bg-fog focus-visible:outline-white",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-[0.95rem] font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
