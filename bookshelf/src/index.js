import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom'
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Sidebar from './Pages/Sidebar/Sidebar';
import Bestsellers from './Pages/Bestsellers/Bestsellers';
import Categories from './Pages/Categories/Categories'
import CategoriePage from './Pages/Categories/CategoriePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import BookPage from './Pages/BookPage/BookPage';
import CategorieBook from './Pages/BookPage/CategorieBook';
import { fetchBookList } from './router';
import Contacts from './Pages/Contacts/Contacts';
import Store from './Pages/Store/Store';


import { Provider } from 'react-redux';
import store from './store/store';
import useToken from './components/useToken';
import useCart from './components/useCart';
import Cart from './Pages/Cart/Cart';
import MyBook from './Pages/Profile/MyBooks/MyBooks';


const Root = () => {

  const {token, setToken} = useToken()
  const {cart, setCart} = useCart()
  
  return(
   
    <div className='container'>
      <main>
        <Sidebar />
        <div className='main-layout'>
          <Header setToken={setToken} token = {token} cart={cart}/>
          <Outlet setCart={setCart}  />
        </div>
        
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
    
  )
}

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={ <Provider store={store}><Root /></Provider>}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/store' element={<Store />} />
        <Route path='/bestsellers' element={<Bestsellers />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:name' element={<CategoriePage />} loader={loader} />
        <Route path='/books/:name' element={<SearchPage />} loader={bookLoader} />
        <Route path='/books/about/:id' element={<BookPage />} loader={infoLoader} />
        <Route path='/categories/:name/:bookId' element={<CategorieBook />} loader={categorieLoader} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mybooks' element={<MyBook />} />
    </Route>
  )
);

function loader({params}) {

  return params.name  
}
function bookLoader({params}){
  return params.name
}
function infoLoader({params}){
  return params.id
}
async function categorieLoader({params}){
  const bookList = await fetchBookList(params.name)
  const book = bookList.books.filter((el) => {return el.primary_isbn10 === params.bookId })
  console.log(book)
  return {book, path: params.name}
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
