import React from 'react';
import ima from './images/icon.png'
import go from './images/linked.png'

const Button = () => {
  
  return (
    <nav className='btn'>
      <button className='email-btn'><img src={ima} alt='' className='email'/> Email</button>
      <button className='link-btn'><img src={go} alt='' className="linked"/> LinkedIn</button>
    </nav>
  )
};

export default Button;
