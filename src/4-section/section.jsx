import React from 'react';
import './section.scss';
import PropTypes from 'prop-types';

function Section(props) {
  return (
  <section className='main-section'>
      
      <h1 className='main-section-title'>Presentation</h1>

      <article className='main-section-article'>
          <h2 className='main-section-article-title'>William Ng Dev-End</h2>
          <p className='main-section-article-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident suscipit possimus vel quae maiores quos ipsa sequi incidunt expedita iste recusandae, atque veritatis, ullam nisi ea odio deleniti assumenda sapiente!
          </p>
          
      </article>
  </section>
  )
}

Section.propTypes = {}

export default Section
