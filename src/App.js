import React from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;