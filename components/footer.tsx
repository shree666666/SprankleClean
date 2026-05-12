import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Sparkles,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Now" },
];

const SERVICE_AREAS = [
  "Sydney CBD",
  "Eastern Suburbs",
  "Inner West",
  "North Shore",
  "Northern Beaches",
  "Parramatta",
  "Western Sydney",
  "Sutherland Shire",
];

const SOCIAL = [
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-brand-cream/90 mt-12">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & tagline */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading text-2xl text-brand-cream"
            >
              <Sparkles className="h-6 w-6 text-accent" aria-hidden />
              Sparkle<span className="text-accent">Clean</span>
            </Link>
            <p className="mt-4 text-sm text-brand-cream/70 max-w-xs">
              Premium home and commercial cleaning, delivered by trained pros
              with eco-friendly products. Spotless results, every visit.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-brand-cream/80">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                (02) 5550 0123
              </li>
              <li className="flex items-center gap-2 text-brand-cream/80">
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                hello@sparkleclean.example
              </li>
              <li className="flex items-center gap-2 text-brand-cream/80">
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                Sydney, NSW
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-heading text-lg text-brand-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-cream/70 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <div>
            <h3 className="font-heading text-lg text-brand-cream">
              Service Areas
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-brand-cream/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Social + ABN */}
          <div>
            <h3 className="font-heading text-lg text-brand-cream">Follow Us</h3>
            <ul className="mt-4 flex items-center gap-3">
              {SOCIAL.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/20 text-brand-cream/80 hover:text-accent hover:border-accent transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xs text-brand-cream/60 space-y-1">
              <p>
                <span className="font-medium text-brand-cream/80">ABN:</span>{" "}
                00 000 000 000
              </p>
              <p>Fully insured & police-checked staff.</p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-brand-cream/15" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-brand-cream/60">
          <p>© {year} SparkleClean Pty Ltd. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <span aria-hidden>•</span>
            <span>Made with ✦ in Sydney</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
