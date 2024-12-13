import { useState } from "react"


export default function useLike(){
    const getLike = () => {
        const stringFav = localStorage.getItem('like')
        if (JSON.parse(stringFav)) return JSON.parse(stringFav)
            else return []
    }

    const [like, setLike] = useState(getLike())

    const addToFav = (action, id, path, title, price, img) => {
        if(action === 'add'){           
            localStorage.setItem('like', JSON.stringify([...like, {id, path, title, price, img}]))
            setLike([...like, {id, path, title, price, img}])
        }
        else{
            let newFav = like.filter((el) => {return el.id !== id})
            localStorage.setItem('like', JSON.stringify(newFav))
            setLike(newFav)
        }
    }

    return{
        like,
        setLike: addToFav
    }
}