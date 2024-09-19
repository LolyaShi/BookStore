import {Link} from 'react-router-dom'
import './Header.scss'

export default function Header(){

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
                    <button>Log in</button>
                </div>
            </div>
        </div>
    )
}