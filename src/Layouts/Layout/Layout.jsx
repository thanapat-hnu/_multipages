import Header from '../Header/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import Todo from '../../Pages/Todo/Todo.jsx'

import { Outlet } from 'react-router'

import './Layout.css'

function Layout({tab,setTab,products,carts,setToken}){
    return(
        <div className='Layout'>
            <Header/>
            <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout;