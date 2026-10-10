import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './Pages/Home';
import ProjectPage from './pages/ProjectPage';
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
      <ScrollToHash />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;