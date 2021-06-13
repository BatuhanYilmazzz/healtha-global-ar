import React, { useReducer } from "react";
import DataContext from "./dataContext";
import { dataReducer } from "./dataReducer";
import axios from "axios";
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

const DataState = (props) => {
  const initialState = {
    lang: null,
    formState: "none",
    sacEkimiState: undefined,
    estetikPlastikCerState: undefined,
    obeziteMetabolikCerState: undefined,
    agızVeDisState: undefined,
    kbbState: undefined,
    gozSaglıgıState: undefined,
    guzellikMerkeziState: undefined,
    hakkımızdaState: undefined,
    galeriState: undefined,
    anasayfaState: undefined,
    othersState: undefined,
    formNamesState: undefined,
    iletisimState: undefined,
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);
  // Global Axios Header

  axios.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      config.params = {
        "language.slug": "ar",
      };
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const getLang = (lang) => {
    try {
      dispatch({
        type: GET_LANG,
        payload: lang,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const openHandleState = (open) => {
    dispatch({
      type: HANDLE_FORM,
      payload: open,
    });
  };

  const getSacEkimi = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/sacekimis`);
      dispatch({
        type: GET_SAC_EKIMI,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getHakkımızda = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/hakkimizdas`
      );
      console.log(res.data);
      dispatch({
        type: GET_HAKKIMIZDA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getEstetikPlastikCer = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/estetikplastikcerrahis`
      );
      dispatch({
        type: GET_ESTETIK_PLASTIK_CER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getObeziteMetabolikCer = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/obezitemetabolikcerrahis`
      );
      dispatch({
        type: GET_OBEZITE_METABOLIK_CER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getAgızDis = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/agizvedis`);
      dispatch({
        type: GET_AGIZ_DIS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getKbb = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/kbbs`);
      dispatch({
        type: GET_KBB,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getGozSaglıgı = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/gozs`);
      dispatch({
        type: GET_GOZ_SAGLIGI,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getGuzellikMerkezi = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/guzellikmerkezis`
      );
      dispatch({
        type: GET_GUZELLIK_MERKEZI,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getGaleri = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/galeris`);
      dispatch({
        type: GET_GALERI,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getAnaSayfa = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/homepages`);
      dispatch({
        type: GET_ANASAYFA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getOthers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/digers`);
      dispatch({
        type: GET_OTHERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getFormNames = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/form-names`
      );
      dispatch({
        type: GET_FORMNAMES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getIletisim = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/iletisims`);
      dispatch({
        type: GET_ILETISIM,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        getLang,
        lang: state.lang,
        formState: state.formState,
        openHandleState,
        getIletisim,
        getFormNames,
        getSacEkimi,
        getHakkımızda,
        getEstetikPlastikCer,
        getObeziteMetabolikCer,
        getAgızDis,
        getKbb,
        getGozSaglıgı,
        getGuzellikMerkezi,
        getGaleri,
        getAnaSayfa,
        getOthers,
        anasayfaState: state.anasayfaState,
        sacEkimiState: state.sacEkimiState,
        gozSaglıgıState: state.gozSaglıgıState,
        estetikPlastikCerState: state.estetikPlastikCerState,
        obeziteMetabolikCerState: state.obeziteMetabolikCerState,
        agızVeDisState: state.agızVeDisState,
        kbbState: state.kbbState,
        guzellikMerkeziState: state.guzellikMerkeziState,
        hakkımızdaState: state.hakkımızdaState,
        galeriState: state.galeriState,
        othersState: state.othersState,
        formNamesState: state.formNamesState,
        iletisimState: state.iletisimState,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
