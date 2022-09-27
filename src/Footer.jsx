import React from 'react'
import './index.css';

const d = new Date();


function Footer() {
  return (
    <p className='footer'> Copyright © {d.getFullYear()} </p>
  )
}

export default Footer