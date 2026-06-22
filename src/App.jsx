import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import "./styles/variables.css";
import './styles/index.css';

function App() {
  // 'dark' pour définir le thème par défaut
  const [theme, setTheme] = useState('dark');

  // 🔄 Fonction pour basculer d'un thème à l'autre
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // 🏷️ La classe CSS change dynamiquement selon l'état du thème
    <div className={`app ${theme}-mode`}>
      {/* On transmet la fonction toggleTheme au Header pour qu'il la donne au logo */}
      <Header toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;