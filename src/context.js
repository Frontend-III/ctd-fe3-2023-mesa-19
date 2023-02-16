import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    /* SUGERENCIA: agregue los demás idiomas */
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageContext = "";

export default LanguageContext;