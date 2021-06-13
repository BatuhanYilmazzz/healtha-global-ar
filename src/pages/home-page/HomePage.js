import React, { useContext, useEffect } from "react";
import Header from "./Header";
import OurServices from "./OurServices";
import Consultancy from "./Consultancy";
import WhyTurkey from "./WhyTurkey";
import dataContext from "../../context/dataContext";

function HomePage() {
  const store = useContext(dataContext);
  const { getAnaSayfa, anasayfaState } = store;

  useEffect(() => {
    getAnaSayfa();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <WhyTurkey data={anasayfaState} />
      <OurServices data={anasayfaState} />
      <Consultancy />
      {/**<Testimonials /> */}
    </>
  );
}

export default HomePage;
