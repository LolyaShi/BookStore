import { useState, useEffect } from 'react'
import './Categories.scss'
import { Link, useLoaderData } from "react-router-dom"
import { fetchBookList } from '../../router'
import useCart from '../../components/useCart'
import Loader from "../Loader/Loader"


export default function CategoriePage(){

    const name = useLoaderData()
    const [list, setList] = useState()
    const [title, setTitle] = useState()
    const [path, setPath] = useState()
    const data = async() => {
        const result = await fetchBookList(name)
        setPath(result.list_name_encoded)
        setTitle(result.list_name)
        setList(result.books)
    }
    useEffect(() => {
        data()
    }, [])


    const {cart, setCart} = useCart([])
    console.log(name)

    const[btn, setBtn] = useState('Add to cart')

    // useEffect(() => {
    //     for(let item of cart){
    //         if(item.id === el.primary_isbn10){
    //             setBtn('In cart')
    //         }
    //     }
    // }, [])

    if(list){
        return(
            <div className="CategoriePage">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <div className="list">
                        {list.map((el) => {

                            return(
                                <div className="list__item" key={el.primary_isbn10}>
                                    <img src={el.book_image} alt="book-cover" />
                                    <div className='detailes-block'>
                                    <div className="book_title">
                                        <Link to={`/categories/${path}/${el.primary_isbn10}`}><h2>{el.title}</h2></Link>
                                        <h3>{el.author}</h3>
                                        <p>{el.description}</p>
                                    </div>
                                    <div className="price">
                                        <h3>{el.price}</h3>
                                        {(cart.filter(item => {return item.id === el.primary_isbn10  }).length > 0) ? 
                                        <button disabled style={{background: 'gray'}} onClick={() =>{ 
                                            setCart('add', el.primary_isbn10, path, el.title, el.price)
                                            window.location.reload(false)
                                            }
                                        }> In cart</button> : 
                                        <button onClick={() =>{ 
                                            setCart('add', el.primary_isbn10, path, el.title, el.price)
                                            window.location.reload(false)
                                            }
                                        }> Add to cart</button>}
                                        {/* <button onClick={() =>{ 
                                            setCart('add', el.primary_isbn10, path, el.title, el.price)
                                            window.location.reload(false)
                                            }
                                        }> Add to cart</button> */}
                                    </div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <Loader />
        )
    }
}