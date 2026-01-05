import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden",
        hover && "transition-all duration-300 hover:shadow-lg hover:shadow-olive-500/10 hover:border-olive-500/50",
        className
      )}
    >
      {children}
    </div>
  );
}
