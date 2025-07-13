import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Footer from './Footer'
import './App.css'

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Try to load from localStorage or use prefers-color-scheme
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) return stored === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen w-full font-sans bg-light dark:bg-dark text-gray-800 dark:text-white transition-colors duration-300`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <div className="container mx-auto">
          <Services />
          <About />
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
