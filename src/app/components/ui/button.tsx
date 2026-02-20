import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  variant = "primary",
  href,
  ...otherProps
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-accent text-bg hover:brightness-110 active:brightness-135 shadow-sm shadow-accent/20",
    outline:
      "bg-transparent border border-border text-fg active:bg-accent/30 hover:border-accent/5 hover:bg-accent/20",
    ghost:
      "bg-transparent text-fg hover:text-fg hover:bg-accent/10 active:bg-accent/20",
  };

  const sharedClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 select-none hover:cursor-pointer",
    "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    "px-3 py-1.5",
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={sharedClasses}
        target={otherProps.target}
        rel={otherProps.rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button {...otherProps} className={sharedClasses}>
      {content}
    </button>
  );
}

export default Button;
