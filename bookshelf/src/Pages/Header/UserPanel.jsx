import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../store'
import './Header.scss'
import store from '../../store/store'

export default function UserPanel({openModal, token}){

    
    const value = store.login

    const login = useSelector((state) => {return state.login.login})
    console.log(value)
    const dispatch = useDispatch()
    
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
                        <li>Log out</li>
                    </ul>
                </div>
                </div>
                
                <img src="./cart.svg" alt="cart" />
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