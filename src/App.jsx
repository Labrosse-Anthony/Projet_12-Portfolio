import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import "./styles/variables.css";
import "./styles/index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        {/* Maintenant React sait quoi afficher ici ! */}
        <Hero />
      </main>
    </div>
  );
}

export default App;