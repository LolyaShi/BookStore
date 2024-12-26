import { useEffect, useState } from "react"
import { fetchTop } from "../../router"
import './Bestsellers.scss'
import Loader from "../Loader/Loader"

export default function Bestsellers(){

    const [top, setTop] = useState()

    async function getTop(){
        const results = await fetchTop()
        setTop(results)
        console.log(results)
    }

    useEffect(() => {
        getTop()
    }, [])

    if(top){
        return(
            <div className="Bestsellers">
                <div className="container">
                    <h1>Bestsellers</h1>

                    <div className="top_list">
                        {top.map((el) => {
                            return(
                                <div className="list_item" key={el.title}>
                                <h2>{el.title}</h2>
                                <p>{el.author}</p>
                                <p>{el.description}</p>
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