import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../store'
import './Header.scss'
import store from '../../store/store'

export default function UserPanel({openModal}){

    
    const value = store.login

    const login = useSelector((state) => {return state.login.login})
    console.log(value)
    const dispatch = useDispatch()
    
    if(login){
        return(
            <div className="UserPanel">
                
                <div className="user">
                    <img src="./user.svg" alt="user" />
                   
                    <button onClick={() => {
                        dispatch(logOut())  
                         
                    }}>Logout</button>
                 
                    
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