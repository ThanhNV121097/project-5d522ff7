import { T, useList } from "../editable";

export default function Header() {
  const links = useList<{ label: string; href: string }>("nav.links");
  return (
    <header className="mx-auto max-w-page px-[var(--gutter)] py-6 flex items-center justify-between">
      <T k="site.name" as="a" href="/" className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-lg" />
      <nav className="flex items-center gap-8 text-sm">
        {links.map((l, i) => (
          <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} className="text-ink-soft hover:text-ink" />
        ))}
        <T
          k="nav.cta.label"
          as="a"
          href="#products"
          className="rounded-[var(--radius)] bg-accent px-4 py-2 text-accent-ink"
        />
      </nav>
    </header>
  );
}
