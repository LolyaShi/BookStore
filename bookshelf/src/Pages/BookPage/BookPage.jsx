import { useEffect, useState } from "react"
import { findBook } from "../../router"
import { useLoaderData } from "react-router-dom"
import './Search.scss'

export default function BookPage(){

    const name = useLoaderData()
    const [book, setBook] = useState([])

    async function getBook(bookId){
        const result = await findBook(bookId)
        console.log(result)
        setBook(result)
    }

    useEffect(() => {
        getBook(name)
    }, [name])


    return(
        <div className="BookPage">
            <div className="container">
             
                <div className="book_item">
                {book.map((el) => {
                        return (
                            <div className="book">
                                <img src={el[0].image} alt="" />
                                <div className="title">{el[0].title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}