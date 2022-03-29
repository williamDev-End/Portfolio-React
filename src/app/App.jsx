import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../1-header/header';
import Main from '../2-main/main';
import Footer from '../3-footer/footer';

function App() {
  return (
    <div className="App">
   <Header/>
   <Main/>
   <footer className='footer'></footer> 
    </div>
  );
}

export default App;
