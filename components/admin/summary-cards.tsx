import {
  CalendarDays,
  CalendarRange,
  DollarSign,
  ListChecks,
} from "lucide-react";

interface Props {
  todayCount: number;
  monthCount: number;
  revenueThisMonth: number;
  totalAll: number;
}

function aud(n: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function SummaryCards({
  todayCount,
  monthCount,
  revenueThisMonth,
  totalAll,
}: Props) {
  const items = [
    {
      label: "Today's bookings",
      value: todayCount,
      hint: "scheduled for today",
      Icon: CalendarDays,
      tone: "text-primary",
    },
    {
      label: "This month",
      value: monthCount,
      hint: "bookings created or scheduled",
      Icon: CalendarRange,
      tone: "text-primary",
    },
    {
      label: "Revenue (this month)",
      value: aud(revenueThisMonth),
      hint: "excludes cancelled",
      Icon: DollarSign,
      tone: "text-accent",
    },
    {
      label: "All bookings",
      value: totalAll,
      hint: "across all statuses",
      Icon: ListChecks,
      tone: "text-primary",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ label, value, hint, Icon, tone }) => (
        <article
          key={label}
          className="rounded-xl border bg-card p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              {label}
            </p>
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted ${tone}`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
          </div>
          <p className="mt-3 font-heading text-3xl text-foreground">
            {value}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
        </article>
      ))}
    </div>
  );
}
