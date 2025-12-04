import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    let attempts = 0;
    const maxAttempts = 50; // tenta por 50 x 100ms = 5 segundos

    const interval = setInterval(() => {
      const el = document.getElementById(id);
      attempts++;

      if (el) {
        clearInterval(interval);

        const yOffset = -80; // ajuste da altura do header
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }

      // evita loop infinito
      if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100); // tenta novamente a cada 100ms

    return () => clearInterval(interval);
  }, [hash]);

  return null;
}
