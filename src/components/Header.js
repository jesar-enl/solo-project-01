import React from 'react';
import images from './images/Jesse.png'
const Header = () => {
  return (
    <div className='header'>
        <img src={images} className="icon" alt='Jesse'/>
        <h1>Jesse Kyambadde</h1>
        <h3>Frontend Developer</h3>
        <h6>mywebsite.com</h6>
    </div>
  );
};

export default Header;
