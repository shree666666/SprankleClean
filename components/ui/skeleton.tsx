import { cn } from "@/lib/utils";

/**
 * Shimmering placeholder block. Use to compose loading states.
 *
 *   <Skeleton className="h-6 w-40" />
 */
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted",
        "before:absolute before:inset-0 before:-translate-x-full",
        "before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        "before:animate-[shimmer_1.6s_infinite]",
        className
      )}
      {...props}
    />
  );
}
