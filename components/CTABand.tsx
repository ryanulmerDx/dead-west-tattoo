import { Button } from "./Button";
import { Container } from "./Container";

interface CTABandProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABand({ 
  title, 
  description, 
  buttonText = "Contact Us",
  buttonHref = "/contact"
}: CTABandProps) {
  return (
    <section className="bg-olive-700 text-white py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-neutral-200 mb-8">
              {description}
            </p>
          )}
          <Button 
            href={buttonHref} 
            variant="secondary"
            size="lg"
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
