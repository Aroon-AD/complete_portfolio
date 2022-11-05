import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import {NextStep} from "./components/NextStep";
import SecondSection from "./components/SecondSection";


function App() {
  return (
    <React.Fragment>
      <Home />
      <SecondSection />
      <NextStep />
      <Gallery />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
