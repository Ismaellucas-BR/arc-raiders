import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface PropsItem {
  question: string;
  answer: string;
}
interface PropsAccordionSection {
  title?: string;
  items: PropsItem[];
}

export default function AccordionSection({
  title = "Perguntas frequentes",
  items = [],
}: PropsAccordionSection) {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-10 bg-bege w-full">
      <h2 className="font-barlow text-[2rem] text-dark-blue font-bold uppercase md:text-[2.5rem] xl:text-[3rem]">
        {title}
      </h2>
      <Accordion
        type="single"
        className="text-dark-blue font-barlow font-bold "
        collapsible>
        {items.map((item, i) => {
          return (
            <AccordionItem
              key={i}
              className="border-b! border-dark-blue!"
              value={`item-${i}`}>
              <AccordionTrigger className="rounded-none text-[1.25rem] font-semibold [&>svg]:w-6 [&>svg]:h-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-barlow text-base font-normal pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
