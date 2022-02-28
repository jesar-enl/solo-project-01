import React from 'react';
import Button from './Button'
import Header from './Header'
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const App = () => {
  return (
    <div className='all'>
      <Header />
      <Button />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

export default App;
