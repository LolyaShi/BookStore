import { useState, useEffect } from 'react'
import './Categories.scss'
import { Link, useLoaderData } from "react-router-dom"
import { fetchBookList } from '../../router'



export default function CategoriePage(){

    const name = useLoaderData()
    const [list, setList] = useState([])
    const [title, setTitle] = useState()
    const data = async() => {
        const result = await fetchBookList(name)
        setTitle(result.list_name)
        setList(result.books)
    }
    useEffect(() => {
        data()
    }, [])


    
    console.log(name)

    return(
        <div className="CategoriePage">
            <div className="container">
                <h1 className="title">{title}</h1>
                <div className="list">
                    {list.map((el) => {
                        return(
                            <div className="list__item" key={el.primary_isbn10}>
                                <img src={el.book_image} alt="book-cover" />
                                <div className="book_title">
                                    <Link to={`/books/${el.primary_isbn13}`}><h2>{el.title}</h2></Link>
                                    <h3>{el.author}</h3>
                                    <p>{el.description}</p>
                                </div>
                                <div className="price">
                                    <h3>{el.price}</h3>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}