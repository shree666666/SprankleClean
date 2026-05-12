import { Phone, Mail, MessageCircle } from "lucide-react";

const CARDS = [
  {
    Icon: Phone,
    title: "Call Us",
    description: "Talk to a real human in under 30 seconds.",
    href: "tel:0255500123",
    cta: "(02) 5550 0123",
  },
  {
    Icon: Mail,
    title: "Email Us",
    description: "Replies within one business day, guaranteed.",
    href: "mailto:hello@sparkleclean.example",
    cta: "hello@sparkleclean.example",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick quotes and bookings via chat.",
    href: "https://wa.me/61255500123",
    cta: "Chat on WhatsApp",
  },
];

export function QuickContactCards() {
  return (
    <ul className="grid sm:grid-cols-3 gap-4 md:gap-5">
      {CARDS.map(({ Icon, title, description, href, cta }) => {
        const external = href.startsWith("http");
        return (
          <li key={title}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className="group block h-full rounded-2xl border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-xl text-primary">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {description}
              </p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:text-accent transition-colors break-all">
                {cta} →
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
