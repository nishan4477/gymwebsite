import React, { useState } from 'react'
import './navbar.scss'
import {links} from '../data'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaBars} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
  <nav>
    <div className="container nav__container">
        <Link to="/" className='logo'>
            <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className= {`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {
                links.map(({name, path},index)=>
                {
                    return(
                        <li key={index}>
                            <NavLink to={path} className={({isActive})=> isActive? 'active-nav' : '' }>{name}</NavLink>  
                        </li>
                    )
                })
            }
        </ul>
        <button className='nav__toggle-btn' onClick={()=>setIsNavShowing(!isNavShowing)}>
            {
                isNavShowing ? <RxCross1/> : <FaBars/>
            }
            
        </button>
        
    </div>
  





  </nav>
  )
}

export default Navbar