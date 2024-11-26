import {Link} from 'react-router-dom'
import './Header.scss'
import { useState } from 'react'
import Login from '../Login/Login'
import UserPanel from './UserPanel'

export default function Header({setToken, token}){

    const [modal, setModal] = useState(false)
    

    return(
        <div className="Header">
             <div className="wrapper">
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/contacts'>Contacts</Link>
                </nav>
                <div className="login">
                    {/*<button onClick={() => {setModal(!modal)}}>Log in</button>*/}
                    <UserPanel openModal={() => {setModal(!modal)}} token={token} setToken={setToken}/>
                </div>
            </div>

            <Login open={modal} close={setModal} setToken={setToken} />
        </div>
    )
}