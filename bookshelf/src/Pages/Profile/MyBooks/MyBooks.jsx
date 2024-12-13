import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './MyBooks.scss'

export default function MyBook(){

    const [myBooks, setMyBooks] = useState([])

    useEffect(() => {
        const books = localStorage.getItem("myBooks")
        setMyBooks(JSON.parse(books))
    }, [])
    console.log(myBooks)

    return(
        <div className="MyBooks">
            <h1>My books</h1>
            <ul className="book-list">
                {myBooks.map(item => {
                    return (
                        <li className="item" key={item.id}>
                            <div className="item-content">
                                 <Link to={`/categories/${item.path}/${item.id}`}>{item.title}</Link>
                                 <div>
                                     <div className="price">{item.price}</div>
                                    
                                 </div>
                                           
                            </div>
                                        
                         </li>
                    )
                })}
            </ul>
           
        </div>
    )
}