import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from "./components/ChatWidget";
import Navbar from './components/Navbar';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar Component */}
      <Navbar />

      {/* Sections with IDs for Navigation */}
      <section id="hero">
        <HeroSection />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 px-4 py-6 md:px-8">
        <p className="text-center text-sm text-gray-400">
          © 2025 SoftSell. All rights reserved.
        </p>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-5 z-50">
        <ChatWidget />
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to Top"
            className="p-3 rounded-full shadow-lg transition-all duration-300 
                       bg-indigo-600 text-white hover:bg-indigo-700 
                       dark:bg-black dark:text-white dark:hover:bg-gray-800 
                       animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
