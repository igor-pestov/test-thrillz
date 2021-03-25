import React from 'react'
import './Navbar.scss'
import SearchInput from './SearchInput/SerchInput'
import Navigation from './Navigation/Navigation'
import thrillz from './assets/thrillz.svg'
import searchMobile from './SearchInput/assets/search.svg'
const Navbar = () => {
    return (
        <div className='navbar__wrapper'>
          <div className='container'>
              <div className='container__left'>
              <a href='/' className='navbar__logo'><img src={thrillz} alt={thrillz}></img></a>
              <SearchInput/>
              

              </div>
              <img className='search-mobile' src={searchMobile} alt={searchMobile}></img>
              <Navigation/>
          </div>
        </div>
    )
}

export default Navbar
