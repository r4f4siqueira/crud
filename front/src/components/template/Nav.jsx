import './Nav.css'
import React from 'react'
import NavIten from './NavIten'

export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            <NavIten link="/" icon="home" botao="Inicio"/>
            <NavIten link="/users" icon="users" botao="Usuários"/>
        </nav>
    </aside>