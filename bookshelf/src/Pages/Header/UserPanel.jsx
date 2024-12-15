
import { Link } from 'react-router-dom'
import './Header.scss'


export default function UserPanel({openModal, token, setToken, cart}){

    
    if(token){
        return(
            <div className="UserPanel">
                
                <div className="user">
                    <img src="./user.svg" alt="user" />
                 
                    <p>Profile</p>
                    <div className="user_menu">
                        <ul>
                            <li><Link to={'/myprofile'}>My Profile</Link></li> 
                            <li><Link to={'/myfavorite'}>My favorite</Link></li>
                            <li><Link to={'/mybooks'}>My books</Link></li>
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