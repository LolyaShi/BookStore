import { useLoaderData } from "react-router-dom"
import './BookPage.scss'
import { useEffect, useState } from "react"
import useCart from "../../components/useCart"
import useLike from "../../components/useLike"



export default function CategorieBook(){

    const book = useLoaderData()
    console.log(book)
    const info = book.book[0]

    const [fav, setFav] = useState('basic')
    const {cart, setCart} = useCart([])
    const [btn, setBtn] = useState('Add to cart')
    const {like, setLike} = useLike()


    function addLike(id, path, title, price, img){
        if (fav == 'basic' ) {
            setFav('light')
            setLike('add', id, path, title, price, img)
        }
            else {
                setFav('basic')
                setLike('remove', id)
            }

            console.log(fav)
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
        for(let el of like){
            if(el.id === info.primary_isbn10 ) setFav('light')
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
                            
                            <button onClick={() => {addLike(info.primary_isbn10, book.path, info.title, info.price, info.book_image )}} >
                                <img className={fav} src='/heart-15.png' alt="like" />
                                
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