import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import GlobalStyle from './styles/GlobalStyle';
import Spinner from './layout/Spinner';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import Gallery from './pages/gallery/Gallery';
import SacEkimi from './pages/sac-ekimi/SacEkimi';
import EstetikPlastikCerrahi from './pages/estetik-plastik-cerrahi/EstetikPlastikCerrahi';
import ObeziteMetabolikCerrahi from './pages/obezite-metabolik-cerrahi/ObeziteMetabolikCerrahi';
import AgızDisSaglıgı from './pages/agız-dis-saglıgı/AgızDisSaglıgı';
import GozSaglıgı from './pages/goz-saglıgı/GozSaglıgı';
import GuzellikMerkezi from './pages/guzellik-merkezi/GuzellikMerkezi';
import Kbb from './pages/kbb/Kbb';
import ContactForm from './layout/ContactForm';
import OrganizasyonHizmetleri from './pages/organizasyon-hizmetleri/OrganizasyonHizmetleri';
import Whatsapp from './layout/Whatsapp';
import ScrollToTop from './layout/ScrollToTop';
///
///
///
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/sac-ekimi' component={SacEkimi} />
          <Route
            exact
            path='/estetik-plastik-cerrahi'
            component={EstetikPlastikCerrahi}
          />
          <Route
            exact
            path='/obezite-metabolik-cerrahi'
            component={ObeziteMetabolikCerrahi}
          />
          <Route exact path='/agız-dis-saglıgı' component={AgızDisSaglıgı} />
          <Route exact path='/kulak-burun-bogaz' component={Kbb} />
          <Route exact path='/goz-saglıgı' component={GozSaglıgı} />
          <Route exact path='/guzellik-merkezi' component={GuzellikMerkezi} />
          <Route
            exact
            path='/organizasyon-hizmetleri'
            component={OrganizasyonHizmetleri}
          />
        </Switch>
        <Whatsapp />
        <ContactForm />
        <Footer />
        <GlobalStyle />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
