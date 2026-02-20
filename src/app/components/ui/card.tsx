import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function card({ children, className }: CardProps) {
  return (
    <div className={cn("border-border bg-bg rounded-lg border", className)}>
      {children}
    </div>
  );
}

export default card;
