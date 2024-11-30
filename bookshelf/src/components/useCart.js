import { useState } from "react"


export default function useCart(){
    const getCart = () => {
        const stringCart = localStorage.getItem('cart')
        if (JSON.parse(stringCart)) return JSON.parse(stringCart)
            else return []
    }

    const [cart, setCart] = useState(getCart())

    const addToCart = (id, name) => {
        localStorage.setItem('cart', JSON.stringify([...cart, {id, name}]))
        setCart([...cart, {id, name}])
    }

    return{
        cart,
        setCart: addToCart
    }
}