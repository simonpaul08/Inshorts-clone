import React from 'react'

const Header = ({ toggleSidebar }) => {

  return (
    <div className='header__container'>
      <div className="burger__menu" onClick={toggleSidebar}><i className="fa-solid fa-bars fa-2x"></i></div>
      <div className="header">
          <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" className='logo'/>
      </div>
      <div></div>
    </div>
  )
}

export default Header


// https://assets.inshorts.com/website_assets/images/logo_inshorts.png , height: 72px