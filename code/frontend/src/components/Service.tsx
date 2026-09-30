import { T } from "../editable";

export default function Service() {
  return (
    <section id="service" className="mx-auto max-w-page px-[var(--gutter)] py-24 border-t border-line">
      <T k="service.heading" as="h2" className="font-display font-[var(--weight-display)] tracking-[var(--tracking-display)] text-[clamp(32px,4vw,52px)] max-w-[16ch]" />
      <T k="service.body" as="p" className="mt-6 text-xl text-ink-soft max-w-[46ch]" />
    </section>
  );
}
