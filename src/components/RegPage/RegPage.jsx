import React from 'react'
import s from './RegPage.module.css'
import { useNavigate } from 'react-router-dom'

const RegPage = (props) => {
    const navigate = useNavigate()
    const onSub = (e) => {
        e.preventDefault()
        props.setUser({name: e.target[0].value})
        document.cookie = `userName=${e.target[0].value}; path='/'; max-age=${60 * 2}`
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={onSub} className={s.form}>
                <input type="text" placeholder='Введите имя' />
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegPage