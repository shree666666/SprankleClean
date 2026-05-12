import { Phone, Mail, MapPin, Clock } from "lucide-react";

const SERVICE_AREAS = [
  "Sydney CBD",
  "Bondi",
  "Surry Hills",
  "Newtown",
  "Manly",
  "Parramatta",
  "Chatswood",
  "Mosman",
  "Baulkham Hills",
  "Liverpool",
  "Cronulla",
  "Hornsby",
  "Ryde",
  "Strathfield",
];

const HOURS = [
  { day: "Mon – Fri", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function InfoSidebar() {
  return (
    <aside className="rounded-2xl border bg-card p-6 md:p-7 space-y-6">
      <div>
        <h3 className="font-heading text-xl text-primary">Get in touch</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Same-day replies during business hours.
        </p>
      </div>

      <ul className="space-y-4 text-sm">
        <li className="flex gap-3">
          <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="font-medium text-foreground">Phone</p>
            <a
              href="tel:0255500123"
              className="text-muted-foreground hover:text-primary"
            >
              (02) 5550 0123
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="font-medium text-foreground">Email</p>
            <a
              href="mailto:hello@sparkleclean.example"
              className="text-muted-foreground hover:text-primary break-all"
            >
              hello@sparkleclean.example
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="font-medium text-foreground">Head office</p>
            <p className="text-muted-foreground">
              Baulkham Hills, NSW 2153
            </p>
          </div>
        </li>
      </ul>

      <div className="border-t border-border pt-5">
        <p className="font-medium text-foreground flex items-center gap-2 mb-3">
          <Clock className="h-4 w-4 text-accent" aria-hidden />
          Business hours
        </p>
        <ul className="space-y-1.5 text-sm">
          {HOURS.map((h) => (
            <li key={h.day} className="flex justify-between gap-4">
              <span className="text-muted-foreground">{h.day}</span>
              <span className="font-medium text-foreground">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border pt-5">
        <p className="font-medium text-foreground mb-3">Service areas</p>
        <ul className="flex flex-wrap gap-1.5">
          {SERVICE_AREAS.map((s) => (
            <li
              key={s}
              className="text-[11px] rounded-full bg-muted text-foreground/75 px-2.5 py-1"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
