import { useState } from 'react'
import { logIn } from '../../store'
import './Login.scss'
import {useDispatch } from 'react-redux'
import PropTypes from 'prop-types';

async function LoginUser(data){
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(data => data.json())
}

export default function Login({open, close, setToken}){

    const [login, setlogin] = useState('')
    const [pwd, setPwd] = useState()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const token = await LoginUser({login, pwd})
        setToken(token)
    }
    //const login = useSelector((state) => {state.login})
    const dispatch = useDispatch()

    if(open){
        return(
            <div className="Login">
                <div className="wrapper">
                    <div className='close' 
                    onClick={()=>{
                        close(false)
                    }}>X</div>
                    <h2>Login to the site </h2>
                    <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form_line">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email" 
                                type="email"
                                onChange={(e) => setlogin(e.target.value)}
                                value={login}
                                required
                             />

                        </div>
                        <div className="form_line">
                            <label htmlFor="pass">Password</label>
                            <input
                             id="pass" 
                             type="password"
                             onChange={(e) => setPwd(e.target.value)}
                             value={pwd}
                             required
                            />

                        </div>
                        <button >Login</button>
                    </form>
                    </div>
                    
                </div>
            </div>
        )
    }

    else{
        return
    }
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };