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

const Root = () => {
  return(
    <div className='container'>
      <main>
        <Sidebar />
        <div className='main-layout'>
          <Header />
          <Outlet />
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
    <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/bestsellers' element={<Bestsellers />} />
        <Route path='/categories' element={<Categories />} />
    </Route>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
