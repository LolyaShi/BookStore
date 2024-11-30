import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { fetchBookInfo } from "../../router"
import './BookPage.scss'


export default function BookPage(){
  

    const id = useLoaderData()

    const[info, setInfo] = useState({})
    const fetchInfo = async () => {
        const result = await fetchBookInfo(id)
        console.log(result)
        setInfo(result.data)
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return(
        <div className="Page">
            <div className="container">
                <div className="book_info">
                    <img src={info.image} alt="book cover" />
                    <div className="about">
                        <h2>{info.title}</h2>
                
                        <h3>{info.authors?.map((el) => {
                            return <span>{el.name}</span>
                        })}</h3>
                        
                        <div className="book_details">
                    <h3>Book details</h3>
                    <ul>
                        <li>
                            <span>Title:</span>
                            {info.title}
                        </li>
                        <li>
                            <span>Publish year:</span>
                            {info.publish_date}
                        </li>
                        <li>
                            <span>Pages:</span>
                            {info.number_of_pages}
                        </li>
                        <li>
                            <span>Rating:</span>
                            {info.rating?.average}
                        </li>
                    </ul>
                   
                </div>
                    </div>
                </div>
                <div className="book_description">
                    <h4>About:</h4>
                    <p>{info.description}</p>
                </div>
                
            </div>
        </div>
    )
}