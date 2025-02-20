import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  className?: string;
}

export function Badge2({ text, className }: BadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("w-fit border-card-foreground/50 font-heading", className)}
    >
      {text}
    </Badge>
  );
}
