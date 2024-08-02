import React , {useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom' ;
import {navList} from '../../Data/Data';
import Cart from './Cart';

const Header = () => {
  const [show , setShow] = useState(false)
  //function for toggle menu 
  const toggle = () => {setShow(!show)}
  return (
    <div className='header'>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src="../images/logo.png" alt="NewsMonkey" />
          </NavLink>
        </div>

        <div className="nav">
          <ul className={show ? "list_active" : "list_inactive"}>
            {navList.map((list) => (
              <li key={list.id}><NavLink to={list.path}>{list.text}</NavLink></li>
            ))}
          </ul>
        </div>


        {/* Search */}
        <div className="search">
          <input type="text" placeholder="Search Keywords" />
          <i className="fa fa-search"></i>
        </div>

            <div className="shop">
              {/* Cart */}
              <Cart/>

              {/* Heart */}
              <div className="heart">
                <span>0</span>
                <i className="fa fa-heart"></i>
              </div>

              <div className="menu_icon" onClick={toggle}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Header