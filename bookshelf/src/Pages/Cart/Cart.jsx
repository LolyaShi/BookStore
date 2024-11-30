import useCart from "../../components/useCart"


export default function Cart(){

    const {cart, setCart} = useCart()

    return(
        <div className="Cart">
            <h1>Cart</h1>
            <div className="cart-items">
                <ol>
                    {cart?.map((item) => {
                        return (
                            <li className="item">
                                {item.name}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}