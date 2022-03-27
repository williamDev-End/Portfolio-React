import React from "react";
import './header.scss';
import PropTypes from "prop-types";

function Header() {
    return (
        <header className='header'>
            <h1 className='header-title'>williamDev-End</h1>
        </header>
    );
};

Header.propTypes = {};

export default React.memo(Header);