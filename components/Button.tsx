import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  href,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-olive-700 text-white hover:bg-olive-600 olive-glow font-bold",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700",
    outline: "border-2 border-olive-700 text-olive-500 hover:bg-olive-700 hover:text-white olive-border-glow",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
