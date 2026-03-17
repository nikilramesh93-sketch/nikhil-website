import Link from "next/link";

interface EmptyStateProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export function EmptyState({ title, subtitle, ctaLabel, ctaHref }: EmptyStateProps) {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-600">{subtitle}</p>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
