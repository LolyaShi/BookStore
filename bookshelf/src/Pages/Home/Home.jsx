import { useEffect, useState } from 'react'
import { fetchbestselers } from '../../router'
import { Link } from 'react-router-dom'
import './Home.scss'
import Loader from '../Loader/Loader'

export default function Home(){


    const [bestsellers, setBestsellers] = useState()

    const data = async() => {
        const responce = await fetchbestselers()
        console.log(responce)
        setBestsellers(responce.lists)
    }
    useEffect(() => {
        data()
    }, [])

    if(bestsellers){
        return(
            <div className="Home">
                <div className="container">
                    <section>
                        <div className="top_section">
                            <img src="/dragon.jpg" alt="" />
                            <div className="top_text">
                            <h2>"Some books leave us free, and some books make us free."</h2>
                            </div>
                            
                        </div>
                    </section>
                    <section>
                        <div className="categories">
                            {bestsellers.map((el) => {
                                return (
                                <div className='categorie_block' key={el.id}>
                                    <h2> {el.display_name}</h2>
                                    <div className='books'>
                                        {el.books.map((book) => {
                                            return(
                                                
                                                    <div className='book_block'>
                                                        <Link to={`/categories/${el.list_name_encoded}/${book.primary_isbn10}`}>
                                                        <img src={book.book_image} alt="cover" />
                                                        </Link>
                                                        <div className='about_book'>
                                                            <p className='title'>{book.title}</p>
                                                            <p className='author'>{book.author}</p>
                                                        </div>
                                                        
                                                    </div>

                                            )
                                        })}
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </section>
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