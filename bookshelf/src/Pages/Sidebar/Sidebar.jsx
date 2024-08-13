import './Sidebar.scss'
import { Link } from 'react-router-dom'

export default function Sidebar(){

    return(
        <div className="Sidebar">
            <div className="container">
                <div className="logo">
                BookShelf
                </div>
                <div className="search">
                    <input type="text"/>
                </div>
                <nav>
                    <Link to='/'>Categories</Link>
                    <Link to='/'>Authors</Link>
                    <Link to='/'>Popular</Link>
                </nav>
            </div>
        </div>
    )
}