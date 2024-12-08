import { useLoaderData } from "react-router-dom"
import './BookPage.scss'
import { useEffect, useState } from "react"
import useCart from "../../components/useCart"



export default function CategorieBook(){

    const book = useLoaderData()
    console.log(book)
    const info = book.book[0]

    const [like, setLike] = useState('basic')
    const {cart, setCart} = useCart([])
    const [btn, setBtn] = useState('Add to cart')

    function addLike(){
        if (like == 'basic' ) setLike('light')
            else setLike('basic')
    }

    function addToCart(){
        setCart('add', info.primary_isbn10, book.path, info.title, info.price)
         window.location.reload(false)
    }

    useEffect(() => {
        for(let item of cart){
            if(item.id === info.primary_isbn10){
                setBtn('In cart')
            }
        }
    }, [])

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
                        <div>
                            {(btn == 'In cart') ? (
                                <button className="add-btn" style={{background:'gray'}} disabled
                                onClick={() => { addToCart() }}
                            >{btn}</button>
                            ) : 
                            <button className="add-btn"
                                onClick={() => { addToCart() }}
                            >{btn}</button>}
                            
                            <button onClick={addLike} >
                                <img className={like} src='/heart-15.png' alt="like" />
                                
                            </button>
                           
                        </div>
                        
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