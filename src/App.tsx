import React from "react";
import { useTheme, ThemeProvider } from "./contexts/theme"; // Use the custom hook

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

import "./App.css";

const App = () => {
  const { themeName } = useTheme(); // Correct way to access context

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

// Wrap the entire app with ThemeProvider
const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
