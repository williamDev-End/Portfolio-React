  import React from 'react'
  import PropTypes from 'prop-types'
  
  function Nav(props) {
    return (
    <nav className='header-title-nav'>
               <a className='header-title-nav-link' href="#" target="_blank" rel="noopener noreferrer">CV</a>
               <a className='header-title-nav-link' href="#" target="_blank" rel="noopener noreferrer">About</a>
               <a className='header-title-nav-link' href="#" target="_blank" rel="noopener noreferrer">Contact</a>
            </nav>
    )
  }
  
  Nav.propTypes = {}
  
  export default Nav
   