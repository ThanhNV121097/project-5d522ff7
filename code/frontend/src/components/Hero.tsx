import { T } from "../editable";

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-[var(--gutter)] pt-16 pb-28">
      <T
        k="hero.headline"
        as="h1"
        className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] leading-[0.95] text-[clamp(52px,9vw,128px)] max-w-[16ch]"
      />
      <T k="hero.sub" as="p" className="mt-8 text-xl text-ink-soft max-w-[46ch]" />
      <T
        k="hero.cta.label"
        as="a"
        href="#products"
        className="mt-10 inline-block rounded-[var(--radius)] bg-accent px-6 py-3 text-accent-ink"
      />
    </section>
  );
}
