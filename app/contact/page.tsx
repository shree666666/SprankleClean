import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { InfoSidebar } from "@/components/contact/info-sidebar";
import { MapPlaceholder } from "@/components/contact/map-placeholder";
import { QuickContactCards } from "@/components/contact/quick-contact-cards";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach SparkleClean by phone, email, or WhatsApp. Same-day replies during business hours. Servicing Sydney from our Baulkham Hills office.",
  openGraph: {
    title: "Contact | SparkleClean",
    description: "Get in touch with Sydney's most trusted cleaning team.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <FadeIn>
          <header className="max-w-2xl mb-10">
            <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
              We&apos;d love to hear from you
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-primary">
              Contact us
            </h1>
            <p className="mt-4 text-muted-foreground">
              Questions, custom quotes, or just a chat — pick your preferred
              way to get in touch.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={100}>
          <QuickContactCards />
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-12">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={120}>
            <InfoSidebar />
          </FadeIn>
        </div>
      </section>

      <section className="container pb-16 md:pb-20">
        <FadeIn>
          <header className="mb-6 max-w-xl">
            <h2 className="font-heading text-2xl md:text-3xl text-primary">
              Where to find us
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Our head office is in Baulkham Hills — though most of the magic
              happens at your place.
            </p>
          </header>
        </FadeIn>
        <FadeIn delay={100}>
          <MapPlaceholder />
        </FadeIn>
      </section>
    </>
  );
}
