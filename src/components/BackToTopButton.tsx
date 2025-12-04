import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300); // mostra após 300px; ajuste se quiser
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      aria-label="Voltar para o topo"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full px-4 py-2 shadow-lg transition-transform duration-200
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }
        bg-white/90 backdrop-blur-sm hover:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400`}>
      {/* Circulo com seta curva para cima */}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true">
          {/* seta curva pra cima */}
          <path
            d="M6 14c2.5-2.5 4.5-4.5 6-6 1.5 1.5 3.5 3.5 6 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7.5L6 4.5 3 7.5"
            transform="translate(6 4)"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Texto */}
      <span className="hidden sm:inline-block text-sm font-medium text-indigo-900">
        Voltar para cima
      </span>
    </button>
  );
}
