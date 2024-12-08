import { useState } from "react"


export default function useCart(){
    const getCart = () => {
        const stringCart = localStorage.getItem('cart')
        if (JSON.parse(stringCart)) return JSON.parse(stringCart)
            else return []
    }

    const [cart, setCart] = useState(getCart())

    const addToCart = (action, id, path, title, price) => {
        if(action === 'add'){           
            localStorage.setItem('cart', JSON.stringify([...cart, {id, path, title, price}]))
            setCart([...cart, {id, path, title, price}])
        }
        else if(action === 'delete'){
            localStorage.setItem('cart', JSON.stringify([]))
            setCart([])
        }
        else{
            let newCart = cart.filter((el) => {return el.id !== id})
            localStorage.setItem('cart', JSON.stringify(newCart))
            setCart(newCart)
        }
    }

    return{
        cart,
        setCart: addToCart
    }
}