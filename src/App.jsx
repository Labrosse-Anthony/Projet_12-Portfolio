import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills.jsx';
import Footer from './components/Footer/Footer.jsx';
import "./styles/variables.css";
import "./styles/index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;