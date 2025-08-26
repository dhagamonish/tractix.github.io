
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 40"
      className={cn("h-7 w-auto", className)}
      aria-label="Tractix logo"
    >
        <rect width="28" height="28" rx="8" ry="8" y="6" className="fill-foreground" />
        <text
            x="36"
            y="29"
            fontFamily="sans-serif"
            fontSize="24"
            fontWeight="500"
            className="fill-foreground"
        >
            tractix
        </text>
    </svg>
  );
}
