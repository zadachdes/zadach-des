import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CustomHomeDesign from './components/services/CustomHomeDesign';
import ModelingRendering from './components/services/ModelingRendering';
import ConstructionDrawings from './components/services/ConstructionDrawings';
import KitchenDesign from './components/services/KitchenDesign';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CustomHomeDesign />
        <ModelingRendering />
        <ConstructionDrawings />
        <KitchenDesign />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;