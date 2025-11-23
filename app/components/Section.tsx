import { type ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ id, title, eyebrow, description, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("section-bg rounded-3xl px-6 py-12 shadow-sm ring-1 ring-emerald-100/40", className)}>
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-3">
          {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-emerald-600">{eyebrow}</p> : null}
          <h2 className="text-2xl font-semibold text-emerald-950 sm:text-3xl">{title}</h2>
          {description ? <p className="text-base text-slate-700 sm:text-lg">{description}</p> : null}
        </header>
        {children ? <div className="space-y-6">{children}</div> : null}
      </div>
    </section>
  );
}
