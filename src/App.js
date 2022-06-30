import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About me', description: 'hello' },
    { name: 'Portfolio', description: 'A portfolio with some of my past projects' },
    { name: 'Contact', description: 'Form to input information to contact me' },
    { name: 'Resume', description: 'Form with resume, skills, and experience about me' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(<About/>);
  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        <About />
        <Portfolio />
        <ContactForm />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;