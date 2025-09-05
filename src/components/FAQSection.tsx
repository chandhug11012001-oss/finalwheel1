import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from '@/data/content';

const FAQSection = () => {
  const { faq } = siteContent;

  return (
    <section id="faq" className="section-padding bg-feature-bg">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {faq.title}
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            {faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-2xl px-8 py-2 shadow-soft border border-border/50 hover:shadow-card transition-smooth"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-smooth py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        
        
      </div>
    </section>
  );
};

export default FAQSection;