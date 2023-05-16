import React from 'react'
import { Navigate } from 'react-router-dom'

const MainPage = (props) => {
    if (!props.user.name){
        return <Navigate to='reg' />
    }
    return (
        <div>hello</div>
    )
}

export default MainPage