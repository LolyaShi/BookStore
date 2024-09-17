
import {  useRef, useState } from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'


export default function Sidebar(){
    const search = useRef()
    const [name, setName] =useState('')
    const writeName = () => {
        console.log(search.current.value)
        setName(search.current.value)
    }


    return(
        <div className="Sidebar">
            <div className="container">
                <div className="logo">
                BookShelf
                </div>
                <div className="search">
                    <input onChange={writeName} ref={search} type="text" placeholder='search...'/>
                    <button onClick={() => {
                        search.current.value = ''
                    }} ><Link to={`/books/${name}`}>Go</Link></button>
                </div>
                <nav>
                    <Link to='/categories'>Categories</Link>
                    <Link to='/bestsellers'>Bestsellers</Link>
                    <Link to='/categories/audio-fiction'>Audiobooks</Link>
                </nav>
            </div>
        </div>
    )
}