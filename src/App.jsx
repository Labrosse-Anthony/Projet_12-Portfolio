import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './src/components/Hero/Hero';
import Skills from './src/components/Skills/Skills';
import Projects from './src/components/Projects/Projects';
import Footer from './src/components/Footer/Footer';

import './styles/variables.css';
import './styles/index.css';

function App() {
  // Gestion basique du Dark/Light mode (même si ton design par défaut est dark)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Tu pourras ajouter une logique ici pour basculer une classe sur le <body>
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main>
        {/* J'utilise des id sur les sections pour permettre l'ancrage du menu de navigation */}
        <section id="presentation">
          <Hero />
        </section>

        <section id="competences">
          <Skills />
        </section>

        <section id="projets">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;