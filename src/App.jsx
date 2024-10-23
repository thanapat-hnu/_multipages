import Layout from './Layouts/Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import Calculator from './Pages/Calculator/Calculator.jsx'
import Animetion from './Pages/Animetion/Animetion.jsx'
import Components from './Pages/Components/Components.jsx'
import Todo from './Pages/Todo/Todo.jsx'
import Products from './Pages/Products/Products.jsx'
import Carts from './Pages/Carts/Carts.jsx'
import Login from './Pages/Login/Login.jsx'



import { fetchProducts } from './Data/DataProducts.jsx'

import { HashRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => {
    setProducts(fetchProducts)
  }, [])

  useEffect(() => console.log(products), [products])

  const firstTap = 'home'
  const [tab, setTab] = useState('')

  useEffect(() => {
    setTab(firstTap)
  }, [])

  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole} />)
  } else {
    return (
      <div className='app'>
        <HashRouter>
          <Routes>
            <Route path={'/'} element={<Layout tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken} />}>
              <Route path={'/'} element={<Home />}></Route>
              <Route path={'/home'} element={<Home />}></Route>
              <Route path={'/calculator'} element={<Calculator />}></Route>
              <Route path={'/animetion'} element={<Animetion />}></Route>
              <Route path={'/components'} element={<Components />}></Route>
              <Route path={'/todo'} element={<Todo />}></Route>
              <Route path={'/Products'} element={<Products products={products} carts={carts} setCarts={setCarts} />}></Route>
              <Route path={'/Carts'} element={<Carts carts={carts} setCarts={setCarts} />}></Route>

            </Route>
          </Routes>
        </HashRouter>
      </div>
    )
  }


}

export default App
