import React from 'react';
import './main.scss';
import Section from '../4-section/section';
import PropTypes from 'prop-types';

function Main(props) {
  return (
      <main className='main'>
          
          <Section/>
          <Section/>
          <Section/>
          
      </main>
    )
}

Main.propTypes = {}

export default Main
