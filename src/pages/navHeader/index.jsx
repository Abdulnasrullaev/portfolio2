import React from 'react'
import { NavHeaders } from './style'
import search from '../assest/icon/icons8-search-64.png'
import shoping from '..//assest/icon/icons8-shopping-cart-64.png' 
import profile from '..//assest/icon/icons8-administrator-male-48.png' 
import { Link} from 'react-router-dom'
import logo from '..//assest/img/logo/logo.png'

function NavHeader() {
    return (
        <NavHeaders>
        <div className='logo'><img src={logo} alt="" /></div>
        <ul>
            <li>
<Link to='/'>     home</Link>            
                  </li>
            <li>
        <Link to='shop'> shop</Link> 
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>latest <div>HOT</div></li>
            <li>
          <Link to='/blog'>blog</Link>
            </li>
            <li>
           <Link to='/pages'>pages</Link>
            </li>
            <li>
       <Link to='/contact'>  contact</Link>
            </li>
        </ul>
<div className='icon'>
<img src={search} alt="" />
<img src={profile} alt="" />
<img src={shoping} alt="" />
</div>
    </NavHeaders>
    )
}

export default NavHeader
