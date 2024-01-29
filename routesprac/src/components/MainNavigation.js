import {Link, link} from 'react-router-dom'
import React from 'react';
import './MainNavigation.css';

export default function MainNavigation () {
  return (
   <>
   <header>
    <nav>
    <div className='header'> Navigation Page</div>
     <ul className='list'>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
            <Link to="/products" >Products</Link>
        </li>
     </ul>
    </nav>
   </header>
    
   </>
  )
}
