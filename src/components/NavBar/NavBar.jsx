import React from 'react'
import s from "./NavBar.module.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={s.nav}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Обо мне</Link>
            <Link to={'/projects'}>Мои проекты</Link>
        </div>
    )
}

export default NavBar