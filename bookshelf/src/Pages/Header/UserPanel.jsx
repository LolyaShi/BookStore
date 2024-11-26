
import './Header.scss'


export default function UserPanel({openModal, token, setToken}){


    console.log(token)
   
    
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