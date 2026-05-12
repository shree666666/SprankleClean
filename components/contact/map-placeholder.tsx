import { MapPin, ExternalLink } from "lucide-react";

/**
 * Stylized "Google Maps placeholder" — a faux map look + a pin overlay
 * showing Baulkham Hills, NSW. Replace with a real <iframe> embed when
 * you have a Maps API key set up.
 */
export function MapPlaceholder() {
  return (
    <figure className="relative overflow-hidden rounded-2xl border bg-card aspect-[16/9] md:aspect-[21/9]">
      {/* Map-like gradient + grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #DDEDEA 0%, #C7E0DB 35%, #E8F1ED 60%, #D4E5DF 100%)",
        }}
      />
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="map-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="#0D6E6E"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>

      {/* Fake roads */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,180 C150,170 250,250 420,210 C580,170 700,260 800,220"
          stroke="#0D6E6E"
          strokeWidth="6"
          strokeOpacity="0.18"
          fill="none"
        />
        <path
          d="M120,0 L180,400"
          stroke="#0D6E6E"
          strokeWidth="4"
          strokeOpacity="0.15"
          fill="none"
        />
        <path
          d="M600,0 L520,400"
          stroke="#0D6E6E"
          strokeWidth="4"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>

      {/* Pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative -translate-y-2 flex flex-col items-center">
          <span
            aria-hidden
            className="absolute top-full mt-0.5 h-2 w-6 rounded-full bg-brand-ink/30 blur-sm"
          />
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-accent/30 animate-ping"
            />
            <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-4 ring-accent/20">
              <MapPin className="h-6 w-6" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      {/* Address card */}
      <figcaption className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-xs rounded-xl bg-background/95 backdrop-blur border border-border p-4 shadow-md">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
          Visit us
        </p>
        <p className="font-heading text-lg text-primary mt-1">
          Baulkham Hills, NSW
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Office by appointment — most service is on-site at your place.
        </p>
        <a
          href="https://www.google.com/maps/place/Baulkham+Hills+NSW/"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
        >
          Open in Google Maps
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </figcaption>

      <span className="absolute top-3 right-3 text-[10px] bg-brand-ink/60 backdrop-blur text-brand-cream px-2 py-1 rounded-full">
        Map placeholder
      </span>
    </figure>
  );
}
