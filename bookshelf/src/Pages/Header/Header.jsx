import {Link} from 'react-router-dom'
import './Header.scss'
import { useState } from 'react'
import Login from '../Login/Login'
import UserPanel from './UserPanel'
import Menu from '../Menu/Menu'

export default function Header({setToken, token, cart}){

    const [modal, setModal] = useState(false)
    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(!menu)
    }
    

    return(
        <div className="Header">
             <div className="wrapper">
                <div className="logo">
                    <Link to='/home'>BookShelf</Link>
                </div>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/contacts'>Contacts</Link>
                </nav>
                <div className="login">
                    {/*<button onClick={() => {setModal(!modal)}}>Log in</button>*/}
                    <UserPanel openModal={() => {setModal(!modal)}} token={token} setToken={setToken} cart={cart}/>

                    
                </div>
                <div className='mini-menu'>
                    
                    <Link to={'/cart'}>
                        <img src="./cart.svg" alt="cart" />
                        <span className='cartNumber'>{cart.length}</span>
                    </Link>
                    <div className='burger' onClick={openMenu}>
                        <div className="span"></div>
                    </div>
                </div>
                
            </div>

            <Login open={modal} close={setModal} setToken={setToken} />

            {(menu ? <div className='menu'><Menu openModal={() => {setModal(!modal)}} openMenu={openMenu} token={token} /></div> : <div></div> )}
          
        </div>
    )
}