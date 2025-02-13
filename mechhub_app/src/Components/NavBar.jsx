import React from 'react'
import logo from '../Assets/logo.svg'
import '../Styles/NavBar.css'


export default function NavBar() {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo' />
        <ul>
            <li>О факультете</li>
            <li>Хакатоны</li>
        </ul>
    </nav>
  );
}
