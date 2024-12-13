import { Link } from "react-router-dom"
import useLike from "../../../components/useLike"
import './Favorite.scss'

export default function Favorite(){

    const {like, setLike} = useLike()

    return(
        <div className="Favorite">
            <h1>My Favorite books</h1>

            <div className="fav-list">
            {like.map(item => {
                return(
                    
                        <div className="list-item" key={item.id}>
                            <Link to={`/categories/${item.path}/${item.id}`}>
                                <img src={item.img} alt="book-cover" />
                            </Link>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                </div>
                           
                        </div>
                    
                    
                )
                })
            }
            </div>
            
        </div>
    )
}