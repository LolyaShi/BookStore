import axios from "axios";

const API_KEY = 'ML6aGy7ckUnEBSMmPfeErxAgtpOiH1Kl'
const NEW_KEY = 'ad7763a6633049a882048f2fda1a2b50'



const MAIN_URL = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
const TOP_BOOKS_URL = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`
const BESTSELLERS_URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`
const LIST_URL = (categorie) => { return `https://api.nytimes.com/svc/books/v3/lists/${categorie}.json?api-key=${API_KEY}`}
const AUTHORS_URL=  `https://api.bigbookapi.com/search-books?id=13031078&api-key=${NEW_KEY}`
const BOOK_SEARCH_URL = (name) => {return `https://api.bigbookapi.com/search-books?query=${name}&api-key=${NEW_KEY}`}
//const BOOK_ID_URL = (id) => {return `https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${id}&api-key=${API_KEY}`}
const BOOK_INFO_URL = (id) => {return `https://api.bigbookapi.com/${id}?api-key=${NEW_KEY}`}

export async function fetchBooks(){
    const response = await axios.get(MAIN_URL)
    console.log(response)
    return response.data.results
}

export async function fetchbestselers(){
    const response = await axios.get(TOP_BOOKS_URL)
    return response.data.results
}
export async function fetchTop(){
    const response = await axios.get(BESTSELLERS_URL)
    return response.data.results
}
export async function fetchBookList(name){
    const response = await axios.get(LIST_URL(name))
    console.log(response)
    return response.data.results
}
export async function findBook(id){
    const response = await axios.get(BOOK_SEARCH_URL(id))
    console.log(response)
    return response.data.books
}



export async function fetchAuthors() {
    const response = await axios.get(AUTHORS_URL)
    return response
    
}
export async function fetchBookInfo(id){
    const result =await axios.get(BOOK_INFO_URL(id))
    return result
}