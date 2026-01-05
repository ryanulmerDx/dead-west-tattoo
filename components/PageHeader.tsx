import { ReactNode } from "react";
import { Container } from "./Container";

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-neutral-950 text-white py-16 md:py-20 border-b border-neutral-800">
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
