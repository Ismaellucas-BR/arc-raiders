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
  const formatAnswer = (text: string) => {
    // 🔸 1) Primeiro tratamos <br/> → vira array com partes separadas
    const brParts = text.split(/<br\s*\/?>/g);

    // Função que transforma um bloco em lista caso tenha " - "
    const parseList = (block: string) => {
      const splitRegex = / - /g;

      if (!block.match(splitRegex)) {
        // sem lista → retorna só texto normal
        return <p>{block.trim()}</p>;
      }

      // quebra os itens da lista
      const parts = block
        .split(splitRegex)
        .map((p) => p.trim())
        .filter(Boolean);

      const firstParagraph = parts.shift();

      return (
        <div className="flex flex-col gap-3" key={Math.random()}>
          {firstParagraph && <p>{firstParagraph}</p>}

          <ul className="list-disc pl-6 flex flex-col gap-2">
            {parts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };

    return (
      <div className="flex flex-col gap-4">
        {brParts.map((block, index) => (
          <div key={index}>{parseList(block)}</div>
        ))}
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center px-5 py-10 bg-bege w-full">
      <h2 className="font-barlow text-[2rem] text-dark-blue font-bold uppercase md:text-[2.5rem] xl:text-[3rem]">
        {title}
      </h2>

      <Accordion
        type="single"
        className="text-dark-blue font-barlow font-bold"
        collapsible>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            className="border-b! border-dark-blue!"
            value={`item-${i}`}>
            <AccordionTrigger className="rounded-none text-[1.25rem] font-semibold [&>svg]:w-6 [&>svg]:h-6">
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="font-barlow text-base font-normal pt-2">
              {formatAnswer(item.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
