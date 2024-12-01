
import useCart from "../../components/useCart"
import { Link } from "react-router-dom"
import './Cart.scss'


export default function Cart(){

    const {cart, setCart} = useCart()

    const deleteItem = (id) => {
         setCart('remove', id)
         window.location.reload(false)
    }

    if(cart.length == 0){
        return (
            <div className="Cart">
                <h1>Cart</h1>
                <h2>Your cart is emty</h2>
            </div>
        )
    }
        else{
            return(
                <div className="Cart">
                    <h1>Cart</h1>
                    <div className="cart-items">
                        <ol>
                            {cart?.map((item) => {
                                return (
                                    <li className="item" key={item.id}>
                                        <div className="item-content">
                                            <Link to={`/categories/${item.path}/${item.id}`}>{item.title}</Link>
                                            <button onClick={() => {deleteItem(item.id)}}>X</button>
                                        </div>
                                        
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="pay-block">
                        <button className="buy-btn">Buy books</button>
                    </div>
                    
                </div>
            )
        }
}