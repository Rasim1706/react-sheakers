import React from 'react'
import '../Css/Login.css'

const Login = () => {
    return (
        <>
            <form onChange={(e) => e.preventDefault()}>
                <div className="input"><input type="email" placeholder='Email' onChange={e => e.target.value} /></div>
                <div className="input"><input type="password" placeholder='Password' onChange={e => e.target.value} /></div>
            </form>
            <button className="loginBtn">Submit</button>
        </>
    )
}

export default Login
