import {
  GET_LANG,
  HANDLE_FORM,
  GET_SAC_EKIMI,
  GET_ESTETIK_PLASTIK_CER,
  GET_OBEZITE_METABOLIK_CER,
  GET_AGIZ_DIS,
  GET_KBB,
  GET_GOZ_SAGLIGI,
  GET_GUZELLIK_MERKEZI,
  GET_HAKKIMIZDA,
  GET_GALERI,
  GET_ANASAYFA,
  GET_OTHERS,
  GET_FORMNAMES,
  GET_ILETISIM,
} from "./types";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case HANDLE_FORM:
      return {
        ...state,
        formState: action.payload,
      };
    case GET_SAC_EKIMI:
      return {
        ...state,
        sacEkimiState: action.payload,
      };
    case GET_ESTETIK_PLASTIK_CER:
      return {
        ...state,
        estetikPlastikCerState: action.payload,
      };
    case GET_OBEZITE_METABOLIK_CER:
      return {
        ...state,
        obeziteMetabolikCerState: action.payload,
      };
    case GET_AGIZ_DIS:
      return {
        ...state,
        agızVeDisState: action.payload,
      };
    case GET_KBB:
      return {
        ...state,
        kbbState: action.payload,
      };
    case GET_GOZ_SAGLIGI:
      return {
        ...state,
        gozSaglıgıState: action.payload,
      };
    case GET_GUZELLIK_MERKEZI:
      return {
        ...state,
        guzellikMerkeziState: action.payload,
      };
    case GET_HAKKIMIZDA:
      return {
        ...state,
        hakkımızdaState: action.payload,
      };
    case GET_GALERI:
      return {
        ...state,
        galeriState: action.payload,
      };
    case GET_ANASAYFA:
      return {
        ...state,
        anasayfaState: action.payload,
      };
    case GET_OTHERS:
      return {
        ...state,
        othersState: action.payload,
      };
    case GET_FORMNAMES:
      return {
        ...state,
        formNamesState: action.payload,
      };
    case GET_ILETISIM:
      return {
        ...state,
        iletisimState: action.payload,
      };

    default:
      return state;
  }
};
