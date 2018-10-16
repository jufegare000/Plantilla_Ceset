export const PATRON_ALFANUMERICO_SIGNOS = "[(\r\n|\r|\n)-?¿!¡():,&*.\s a-zA-Z0-9\u00C0-\u00FF\s]+";
export const PATRON_ALFANUMERICO = "[-. a-zA-Z0-9\u00C0-\u00FF\s]+";
export const PATRON_SEMESTRE = "[0-9]+-[1-2]{1}$";
export const PATRON_NUMERICO = "[0-9]+";
export const PATRON_RANGO = "[0-9]+-[0-9]+$";
export const PATRON_EMAIL = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
export const PATRON_ALFANUMERICO_SIN_ACENTOS = "[-_?¿!¡()& a-zA-Z0-9\s]+";