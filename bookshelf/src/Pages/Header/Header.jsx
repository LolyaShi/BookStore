import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(){

    return(
        <div className="Header">
             <div className="wrapper">
                <div className="logo">BookShelf</div>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/about'>Store</Link>
                    <Link to='/'>Categories</Link>
                </nav>
                <div className="search">
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}