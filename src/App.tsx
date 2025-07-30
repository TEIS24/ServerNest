import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HostingPlans from './components/HostingPlans';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { ThemeProvider } from './context/ThemeContext';
import AIChat from './components/AIChat';
import TawkToChat from './components/TawkToChat';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <HostingPlans />
            <WhyChooseUs />
            <Testimonials />
          </>
        );
      case 'hosting':
        return (
          <>
            <div id="hosting-plans" className="pt-20">
              <HostingPlans />
            </div>
          </>
        );
      case 'features':
        return (
          <>
            <div className="pt-20">
              <Features />
              <Services />
            </div>
          </>
        );
      case 'about':
        return (
          <>
            <div className="pt-20">
              <About />
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <div className="pt-20">
              <Contact />
            </div>
          </>
        );
      case 'services':
        return (
          <>
            <div className="pt-20">
              <Services />
            </div>
          </>
        );
      default:
        return (
          <>
            <Hero />
            <Features />
            <HostingPlans />
            <WhyChooseUs />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer setCurrentPage={setCurrentPage} />
        <AIChat />
        <TawkToChat />
      </div>
    </ThemeProvider>
  );
}

export default App;