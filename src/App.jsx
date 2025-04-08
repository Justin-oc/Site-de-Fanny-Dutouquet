import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Portraits from './pages/Portraits';
import Famille from './pages/Famille';
import Naissance from './pages/Naissance';
import Grossesse from './pages/Grossesse';
import Enfant from './pages/Enfant';
import Canin from './pages/Canin';
import Wedding from './pages/Wedding';
import Identite from './pages/Identite';
import Contact from './pages/Contact';
import About from './pages/About';
import Awards from './pages/Awards'
import MentionsLegales from './pages/MentionsLegales';
import Cgv from './pages/Cgv';
import './styles/main.scss';

function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="wrapper">
      {!isLanding && <Header />}
      <main className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/portraits/famille" element={<Famille />} />
          <Route path="/portraits/naissance-bebe" element={<Naissance />} />
          <Route path="/portraits/grossesse" element={<Grossesse />} />
          <Route path="/portraits/enfant" element={<Enfant />} />
          <Route path="/portraits/canin" element={<Canin />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/photos-identite" element={<Identite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/mentions-légales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<Cgv />} />
        </Routes>
      </main>
      {!isLanding && <Footer />}
    </div>
  );
}

export default App;
