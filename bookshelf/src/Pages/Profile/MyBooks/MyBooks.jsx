import { useEffect, useState } from "react"

export default function MyBook(){

    const [myBooks, setMyBooks] = useState([])

    useEffect(() => {
        const books = localStorage.getItem("myBooks")
        setMyBooks(JSON.parse(books))
    }, [])
    console.log(myBooks)

    return(
        <div>
            <h1>My books</h1>
            {myBooks.map(item => {
                return (
                    <div>{item.title}</div>
                )
            })}
        </div>
    )
}