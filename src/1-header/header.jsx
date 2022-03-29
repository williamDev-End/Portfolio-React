import React from "react";
import './header.scss';
import './1-nav/nav.scss';
import logo from './logo/logo.svg';
import Nav from './1-nav/nav';
import PropTypes from "prop-types";

function Header() {
    return (
        <header className='header'>
            <h1 className='header-title'><a className='header-title-link' href="#"> WilliamDev-End</a></h1>
            <img className='header-img' src={logo} alt="logo" title="william Dev-End" />
        <Nav/> 
        </header>
    );
};

Header.propTypes = {};

export default React.memo(Header);