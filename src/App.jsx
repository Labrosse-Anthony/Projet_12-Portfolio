import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import "./styles/variables.css";
import './styles/index.css';

function App() {
  // 'dark' pour définir le thème par défaut
  const [theme, setTheme] = useState('dark');

  // Fonction pour basculer d'un thème à l'autre
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}-mode`}>
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <Header toggleTheme={toggleTheme} />
      <main id="contenu">
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;