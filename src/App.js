import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import {NextStep} from "./components/NextStep";
import SecondSection from "./components/SecondSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Home />
      <SecondSection />
      <NextStep />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
