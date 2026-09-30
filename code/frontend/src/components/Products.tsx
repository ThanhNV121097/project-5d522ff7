import { T, useContent, useList } from "../editable";

export default function Products() {
  const list = useList<{ name: string; note: string }>("products.list");
  return (
    <section id="products" className="mx-auto max-w-page px-[var(--gutter)] py-24 border-t border-line">
      <T k="products.heading" as="h2" className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-[clamp(32px,4vw,52px)]" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <figure className="aspect-[4/5] bg-surface flex items-end p-6">
          <T k="products.hero.name" as="figcaption" className="font-display text-2xl" />
        </figure>
        <ul className="divide-y divide-line">
          {list.map((_, i) => (
            <li key={i} className="py-6">
              <T k={`products.list.${i}.name`} as="h3" className="font-display font-[var(--weight-display)] text-xl" />
              <T k={`products.list.${i}.note`} as="p" className="mt-2 text-ink-soft max-w-[42ch]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
