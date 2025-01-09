import React from 'react';
import About from './components/about';
import Footer from './components/footer';
import Hero from './components/hero';
import NavBar from './components/navBar';
import Services from './components/services/services';
import Tours from './components/tours/tours';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
