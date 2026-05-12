import Image from "next/image";

export function OurStory() {
  return (
    <section aria-label="Our story" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[5/6] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
          <Image
            src="https://picsum.photos/seed/sparkleclean-story/900/1100"
            alt="A SparkleClean technician detailing a kitchen surface"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden md:block h-32 w-32 rounded-2xl bg-accent/30 blur-2xl"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
            Our story
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary">
            Built on hospitality, not just hustle
          </h2>
          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              SparkleClean started in 2021 when our founder, Maya, hired a
              cleaning service for her elderly mum and was shocked by how
              transactional it felt. She believed there was a better way — one
              where the team felt respected, the products were safe, and the
              experience felt like hospitality.
            </p>
            <p>
              Five years in, we&apos;ve grown to over 30 staff across Sydney
              while keeping that founding spirit intact. Every cleaner is
              police-checked, fully trained on our 40-point checklist, and
              paid above the industry minimum.
            </p>
            <p>
              We use eco-friendly products by default — better for your
              family, our crew, and the harbour we all love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
