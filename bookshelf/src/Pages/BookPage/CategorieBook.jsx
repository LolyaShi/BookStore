import { useLoaderData } from "react-router-dom"
import './BookPage.scss'

export default function CategorieBook(){

    const book = useLoaderData()
    console.log(book)
    const info = book[0]

    return(
        <div className="Page">
            <div className="container">

                <div className="book_info">
                    <img src={info.book_image} alt="book cover" />
                    <div className="about">
                        <h2>{info.title}</h2>
                
                        <h3>{info.author}</h3>
                        
                        <div className="book_details">
                    <h3>Book details</h3>
                    <ul>
                        <li>
                            <span>Title:</span>
                            {info.title}
                        </li>
                        <li>
                            <span>Publisher:</span>
                            {info.publisher}
                        </li>
                        <li>
                            <span>Rank:</span>
                            {info.rank}
                        </li>
                    </ul>

                    <div className="price">
                        <h3>{info.price}</h3>
                        <button>Add to cart</button>
                    </div>
                   
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