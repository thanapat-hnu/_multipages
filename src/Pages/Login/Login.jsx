import { verifyUser } from '../../Data/DataUser';

import Form from 'react-bootstrap/Form';

import { useRef, useState } from 'react';

import './Login.css'

function Login({ setToken, setRole }) {
    const userRef = useRef()
    const passRef = useRef()
    const [username,setUsername] = useState('user')
    const [password,setPassword] = useState('pass')

    return (
        <div className="login">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='Username'
                ref={userRef}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Label htmlFor="password">password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder='password'
                ref={passRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn btn-success mt-3' onClick={() => {
                const user = userRef.current.value.trim()
                const pass = passRef.current.value.trim()
                const userInfo = verifyUser(user, pass)
                userRef.current.value = ''
                passRef.current.value = ''
                if (userInfo === null) {
                    alert('Wrong username or password')
                    userRef.current.focus()
                } else {
                    setToken(userInfo.token)
                    setRole(userInfo.role)
                }
            }}>Login</button>
        </div>
    )
}
export default Login;