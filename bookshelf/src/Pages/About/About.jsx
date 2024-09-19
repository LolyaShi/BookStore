//import { fetchAuthors } from "../../router"
//import { useState, useEffect } from "react"
import './About.scss'


export default function About(){
/*
    const [authors, setAuthors] = useState([])
    const data = async() => {
        const result = await fetchAuthors()
        console.log(result)
        setAuthors(result)
    }
    useEffect(() => {
        data()
    }, [])*/

    return(
        <div className="About">
            <div className="wrapper">
                <h1>About</h1>
                <p>
                Subsidiary enterprise with foreign investments "BookShelf" was founded in 2013. The main office of the company is located in the city of Kyiv, at the address: str.Vasylkivska, 30.
                </p>
                <p>
                The company has been a member of the European Business Association since 2015 and the Ukrainian Association of Book Publishers and Book Distributors.
                </p>
                <p>
                For more than 10 years of its existence, the company has turned from an ordinary book seller into a horizontally integrated enterprise with a comprehensive system of serving the public with book products, starting with the publication of its own books and the selection of the best assortment from leading publishing houses in Ukraine, to information support for publications and a multi-channel distribution system, which includes wholesale sales , own retail and online sales.
                </p>
            </div>
           
        </div>
    )
}