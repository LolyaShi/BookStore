import { Link } from "react-router-dom";
import './MyProfile.scss'

export default function MyProfile(){

    return(
        <div className="MyProfile">
            <h2>Welcome to your cabinet, User!</h2>
            <div className="profile-links">
                <div>
                    <Link to={'/myfavorite'}>Favorite books</Link>
                </div>
                <div>
                    <Link to={'/mybooks'}>Purchased books</Link>
                </div>
                <div>
                    <Link to={'/store'}>Delivery&Payment</Link>
                </div>
            </div>
        </div>
    )
}