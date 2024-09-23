import {Link} from 'react-router-dom'
import './Header.scss'
import { useState } from 'react'
import Login from '../Login/Login'
import UserPanel from './UserPanel'

export default function Header(){

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
                    <UserPanel openModal={() => {setModal(!modal)}}/>
                </div>
            </div>

            <Login open={modal} close={setModal} />
        </div>
    )
}