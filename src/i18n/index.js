import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";
import ptHome from "./locales/pt/home.json";
import enHome from "./locales/en/home.json";
import ptMedia from "./locales/pt/Media.json";
import enMedia from "./locales/en/Media.json";
import ptNews from "./locales/pt/News.json";
import enNews from "./locales/en/News.json";
import enTwitchDrops from "./locales/en/TwitchDrops.json";
import ptTwitchDrops from "./locales/pt/TwitchDrops.json";
import enCreatorProgram from "./locales/en/creatorProgram.json";
import ptCreatorProgram from "./locales/pt/creatorProgram.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      Media: enMedia,
      News: enNews,
      TwitchDrops: enTwitchDrops,
      CreatorProgram: enCreatorProgram,
    },
    pt: {
      common: ptCommon,
      home: ptHome,
      Media: ptMedia,
      News: ptNews,
      TwitchDrops: ptTwitchDrops,
      CreatorProgram: ptCreatorProgram,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["common", "home", "Media", "News", "TwitchDrops", "CreatorProgram"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
