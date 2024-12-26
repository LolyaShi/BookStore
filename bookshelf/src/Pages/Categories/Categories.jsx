import { useState, useEffect } from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
import { fetchBooks } from '../../router'
import Loader from '../Loader/Loader'


export default function Sidebar(){


    const [categories, setCategories] = useState()
    const data = async() => {
        
        const result = await fetchBooks()
        setCategories(result)
    }
    useEffect(() => {
        data()
       
    }, [])

    if(categories){
        return(
            <div className="Categories">
                <h1>Categories </h1>
                <div className="container">
                    
                    {categories.map(el => {
                        return(
                            <div className='categorie'>
                                <Link to={`/categories/${el.list_name_encoded}`}>{el.list_name}</Link>
                                
                            </div>
                        )
                    })}
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