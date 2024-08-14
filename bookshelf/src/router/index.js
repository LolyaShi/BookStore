import axios from "axios";

const API_KEY = 'ML6aGy7ckUnEBSMmPfeErxAgtpOiH1Kl'



const MAIN_URL = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
const TOP_BOOKS_URL = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`
const BESTSELLERS_URL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`

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