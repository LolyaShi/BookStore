
import { Link } from 'react-router-dom'
import './Header.scss'

import { useEffect, useState } from 'react'


export default function UserPanel({openModal, token, setToken, cart}){


    console.log(token)
    // const [cartNumber, setCartNumber] = useState(cart.length)


    // useEffect(() => {
    //     setCartNumber(cart.length)
    // }, [])
    
    if(token){
        return(
            <div className="UserPanel">
                
                <div className="user">
                    <img src="./user.svg" alt="user" />
                 
                    <p>Profile</p>
                    <div className="user_menu">
                        <ul>
                            <li>My Profile</li>
                            <li>My favorite</li>
                            <li>My books</li>
                            <li onClick={() => {setToken(false)}}>Log out</li>
                        </ul>
                    </div>
                </div>
                
                <Link to={'/cart'}>
                    <img src="./cart.svg" alt="cart" />
                    <span className='cartNumber'>{cart.length}</span>
                </Link>
            </div>
        )
    }

    else{
        return(
            <div className="UserPanel">
                <button onClick={openModal}>Log in</button>
            </div>
        )
    }
    
}