import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar({ tab, setTab, products, carts, setToken }) {
    return (
        <div className='Navbar'>

            <Link to={'/home'}>
                <button className={'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('home')}>Home</button>
            </Link>

            <Link to={'/calculator'}>
                <button className={'btn ' + (tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('calculator')}>Calculator</button>
            </Link>

            <Link to={'/animetion'}>
                <button className={'btn ' + (tab === 'animetion' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('animetion')}>Animetion</button>
            </Link>

            <Link to={'/components'}>
                <button className={'btn ' + (tab === 'components' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('components')}>Components</button>
            </Link>

            <Link to={'/todo'}>
                <button className={'btn ' + (tab === 'todo' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('todo')}>Todo</button>
            </Link>

            <Link to={'/Products'}>
                <button className={'btn ' + (tab === 'Products' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Products')}>Products&nbsp;({products.length})</button>
            </Link>

            <Link to={'/Carts'}>
                <button type="button" className={'btn ' + (tab === 'Carts' ? 'btn-primary position-relative' : 'btn-outline-primary position-relative')} onClick={() => setTab('Carts')}>
                    Carts
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        ({carts.length > 9 ? '9+' : carts.length})
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </Link>


            <button className='btn btn-outline-danger' onClick={() => setToken('')}>Logout</button>


        </div>
    )
}
export default Navbar;