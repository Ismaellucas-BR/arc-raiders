import AccordionSection from "../home/AccordionSection";

export default function Enlist() {
  return (
    <section className="flex flex-col justify-center items-center bg-bege w-full max-w-[120rem]">
      <div className="flex flex-col justify-center items-center gap-5 w-[90%] pt-7">
        <div className="flex justify-center items-center gap-3 w-full">
          <div className="w-[10%] bg-[linear-gradient(90deg,transparent,#130918)] h-1 lg:w-[35%]"></div>
          <div className="text-dark-blue text-[3rem] font-semibold uppercase">
            Alistar-se
          </div>
          <div className="w-[10%] bg-[linear-gradient(270deg,transparent,#130918)] h-1 lg:w-[35%]"></div>
        </div>
        <p className="font-barlow font-medium text-[1.25rem] text-center leading-7 text-dark-blue xl:text-[1.5rem]">
          {" "}
          O Programa de Criadores da Embark ainda está em fase piloto e as vagas
          são limitadas. Nossa equipe analisa cada inscrição para verificar se
          os criadores se encaixam no perfil do programa.
        </p>
        <div className="flex flex-col justify-center gap-7 bg-dark-blue rounded w-full p-4 lg:flex-row lg:p-8 lg:gap-10 max-w-[64rem] xl:px-8 xl:py-10">
          <div className="flex flex-col gap-3 font-barlow lg:w-1/2">
            <span className="text-[1.25rem]">
              Para ser
              <span className="text-yellow-arc"> aceito</span>, você deve:
            </span>

            <ul className="flex flex-col gap-2.5 font-barlow text-[1.125rem] list-disc pl-6 leading-relaxed">
              <li>Ter pelo menos 18 anos de idade.</li>
              <li>Ter uma conta Embark ID ativa.</li>
              <li>Siga nosso Código de Conduta e Diretrizes de Conteúdo.</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-3 font-barlow lg:w-1/2">
            <span className="text-[1.25rem]">
              Também procuramos
              <span className="text-yellow-arc"> qualidades</span>, como:
            </span>

            <ul className="flex flex-col gap-2.5 font-barlow text-[1.125rem] list-disc pl-6 leading-relaxed">
              <li>
                Cobertura consistente de ARC Raiders em pelo menos uma de suas
                plataformas.
              </li>
              <li>
                Uma personalidade forte e gentil, além de habilidades incríveis.
              </li>
              <li>
                Promover interações positivas e respeitosas com suas comunidades
                e colegas criadores.
              </li>
            </ul>
          </div>
        </div>
        <p className="font-barlow font-base font-medium text-center text-dark-blue italic">
          As admissões serão feitas em etapas. Se você não for selecionado na
          primeira, não se preocupe! Você poderá ser selecionado na próxima
          etapa.
        </p>
      </div>
      <AccordionSection
        items={[
          {
            question:
              "Quem pode participar do Programa de Criadores da Embark?",
            answer:
              "Todos os criadores de conteúdo que se dedicam a construir algo incrível com a Embark Studios podem se inscrever. Para ser elegível para o programa, você deve ter pelo menos 18 anos de idade e seguir o Código de Conduta e as Diretrizes de Conteúdo. Também recomendamos que você crie conteúdo original e exclusivo (transmissões ao vivo, vídeos ou curtas) para aumentar suas chances de ser aceito.",
          },
          {
            question:
              "Como faço para me inscrever no Programa de Criadores da Embark?",
            answer:
              "Você pode se inscrever em nosso programa aqui. Após o envio da sua inscrição, a equipe do ECP irá analisá-la cuidadosamente e, caso seja aprovada, entraremos em contato por e-mail.",
          },
          {
            question:
              "Quanto tempo demora para que minha candidatura seja analisada?",
            answer:
              "Atualmente, estamos aceitando membros em grupos menores, portanto, o tempo de resposta pode variar. Se você não for aceito(a) agora, não se preocupe! Você poderá ser aceito(a) no futuro.",
          },
          {
            question: "O que a Embark Studios procura no meu conteúdo?",
            answer:
              "Estamos interessados ​​em criadores apaixonados pelos nossos jogos, que interajam ativamente com o público e produzam conteúdo verdadeiramente único. Também procuramos qualidades como: - Cobertura consistente dos ARC Raiders em pelo menos uma de suas plataformas, como: YouTube, Twitch, Instagram e TikTok. - Uma personalidade forte e gentil, além de habilidades incríveis.- Promover interações positivas e respeitosas com suas comunidades e colegas criadores.<br/>*Atender a esses critérios aumenta suas chances, mas não garante a aceitação no programa.",
          },
          {
            question:
              "Sou obrigado a dar apenas feedback positivo aos jogos da Embark Studios se eu for um Criador ou Parceiro da Embark?",
            answer:
              "Desejamos que o feedback seja construtivo e feito de forma profissional. Sempre nos esforçamos para melhorar nossos jogos e agradecemos o feedback honesto, seja ele positivo ou negativo!",
          },
        ]}
      />
    </section>
  );
}
