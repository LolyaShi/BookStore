import { fetchAuthors } from "../../router"
import { useState, useEffect } from "react"


export default function About(){

    const [authors, setAuthors] = useState([])
    const data = async() => {
        const result = await fetchAuthors()
        console.log(result)
        setAuthors(result)
    }
    useEffect(() => {
        data()
    }, [])

    return(
        <div className="About">
           <h1>About</h1>
        </div>
    )
}