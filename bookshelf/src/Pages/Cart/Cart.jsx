
import useCart from "../../components/useCart"
import { Link } from "react-router-dom"
import './Cart.scss'
import { useEffect, useState } from "react"




export default function Cart(){

   

    // function boughtBooks(data){
    //      fetch('https://jsonplaceholder.typicode.com/users/1', {
    //         method: 'PATCH',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({username: data})
    //       })
    //       .then(data => console.log(data.json()))
    // }

    const {cart, setCart} = useCart()
    const [totalPrice, setTotalPrice] = useState(0)

    const deleteItem = (id) => {
         setCart('remove', id)
         window.location.reload(false)
    }

    const countPrice = () => {
        let sum = 0
        for(let el of cart){
            
            sum += Number(el.price)

        }
       
        setTotalPrice(sum)
        console.log(sum)
    }

    const addToMyBooks = () => {
        const books = JSON.parse(localStorage.getItem('myBooks'))
        console.log(books)
        if(books == null){
            localStorage.setItem('myBooks', JSON.stringify(cart))
        }
        else{
            localStorage.setItem('myBooks', JSON.stringify(books.concat(cart)))
        }
         
         
         setCart('delete')
         window.location.reload(false)
    }

    useEffect(() => {
        countPrice()
    }, cart)

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
                                            <div>
                                                <div className="price">{item.price}</div>
                                                <button onClick={() => {deleteItem(item.id)}}>X</button>
                                            </div>
                                           
                                        </div>
                                        
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="price-block">
                        <p>Total price: {totalPrice}$</p>
                    </div>
                    <div className="pay-block">
                        <button className="buy-btn" onClick={ () => addToMyBooks()}>Buy books</button>
                    </div>
                    
                </div>
            )
        }
}