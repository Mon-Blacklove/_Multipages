
import { Outlet } from 'react-router'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'


function Layout({ tab, setTab ,products,carts,setToken}) {
    return (
        <div>
            <Header />
            <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout