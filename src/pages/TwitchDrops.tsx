import AccordionSection from "../components/home/AccordionSection";
import HeroSection from "../components/twitchDrops/HeroSection";

export default function TwitchDropsPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full max-w-[100rem]">
      <HeroSection />
      <section className="bg-bege w-full">
        <AccordionSection
          title="Perguntas frequentes"
          items={[
            {
              question: "O que são Twitch Drops?",
              answer:
                "Os Twitch Drops são recompensas concedidas a quem assiste a transmissões especiais na Twitch. Ao vincular sua conta da Twitch ao seu ID da Embark  e assistir a streamers com Drops ativados durante um determinado período, você receberá itens cosméticos no jogo!",
            },
            {
              question:
                "Como faço para vincular minha conta do Twitch ao Embark ID?",
              answer:
                "Você pode vincular sua conta da Twitch fazendo login no Embark ID. Depois de fazer login, acesse Plataformas conectadas  e verifique se sua conta da Twitch e a plataforma em que você joga estão vinculadas.",
            },
            {
              question:
                "Quais transmissões eu preciso assistir para conseguir drops?",
              answer:
                "Todas as transmissões da ARC Raiders com a tag 'Drops Enabled' contarão para o ganho de drops. Todas as transmissões ativas e suas respectivas tags podem ser visualizadas nesta página da Twitch.",
            },
            {
              question: "Quando e como receberei meus itens do jogo?",
              answer:
                "Você receberá uma notificação na Twitch quando os itens forem concedidos. Após a concessão, você precisará resgatar a recompensa na Twitch  antes do término da campanha Twitch Drops. Se você já estiver conectado ao jogo, será necessário sair e entrar novamente.",
            },
            {
              question:
                "Existe alguma forma de verificar meu progresso em relação à próxima queda?",
              answer:
                "Você pode acompanhar seu progresso na página de Inventário de Drops da Twitch.",
            },
            {
              question:
                "Posso ganhar drops mais rápido ou com mais frequência assistindo a mais de um canal ao mesmo tempo?",
              answer:
                "Não, você só poderá receber um drop por canal ativo de cada vez. Assistir a mais de um canal simultaneamente não resultará em mais drops.",
            },
            {
              question:
                "Quanto tempo demora para os itens aparecerem no meu inventário do jogo?",
              answer:
                "Sua recompensa poderá ser resgatada no jogo assim que você a solicitar (clicando no botão 'Resgatar'). Você receberá uma notificação na Twitch quando os itens forem concedidos.",
            },
            {
              question: "Preciso do Twitch Prime para ser elegível?",
              answer:
                "Não! Você só precisa de uma conta da Twitch vinculada ao seu ID da Embark e ter o ARC Raiders instalado em uma das plataformas compatíveis.",
            },
          ]}
        />
      </section>
    </main>
  );
}
