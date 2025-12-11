import React from "react";
import "./i18n";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./components/translation/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./themes/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import TwitchDropsPage from "./pages/TwitchDrops";
import CreatorProgram from "./pages/CreatorProgram";
import NewsSingle from "./components/news/NewsSingle";

// ⬇️ IMPORTANTE: importe o ScrollToHash
import ScrollToHash from "./components/ScrollToHash";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        {/* ⬇️ Scroll suave para hashes */}
        <ScrollToHash />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/twitch-drops" element={<TwitchDropsPage />} />
            <Route path="/creator-program" element={<CreatorProgram />} />
            <Route path="/news/:slug" element={<NewsSingle />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
