import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import './Menu.scss'

export default function Menu({openModal, openMenu, token, setToken}){

    const search = useRef()
    const [name, setName] =useState('')
    const writeName = () => {
        console.log(search.current.value)
        setName(search.current.value)
    }


    return(
        <div className="Menu">
            <div className="search">
                <input onChange={writeName} ref={search} type="text" placeholder='search...'/>
                <button onClick={() => {
                     search.current.value = ''
                     openMenu()
                }} ><Link to={`/books/${name}`}>Go</Link></button>
            </div>
            <div className="links">
                <ul>
                    <li onClick={openMenu}><Link to={'/home'}>Home</Link></li>
                    <li onClick={openMenu}><Link to={'/about'}>About</Link></li>
                    <li onClick={openMenu}><Link to={'/categories'}>Categories</Link></li>
                    <li onClick={openMenu}><Link to={'/bestsellers'}>Bestsellers</Link></li>
                    <li onClick={openMenu}><Link to={'/contacts'}>Contacts</Link></li>
                </ul>
            </div>
            <div>
                {(!token) ? <div className="login">
                    <button className="btn" onClick={() => {
                    openModal()
                    openMenu()
                }}>Log in</button></div> :
                <div className="profile">
                    <div onClick={openMenu}><Link to={'/myprofile'}>My Profile</Link></div>
                    <button className="btn" onClick={() => {
                        setToken(false)
                        openMenu()
                    }}>Log out</button>
                </div>}
               
            </div>
            
        </div>
    )
}