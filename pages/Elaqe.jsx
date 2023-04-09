import React from 'react';                           
import '../App.css';
import esassekil from '../img/esassekil.png'
import bitki from '../img/bitki.png';
import bguc from '../img/bguc.png';
import '../App.css';
import seher from '../img/seher.png';
import Signup from '../components/Signup';

function Elaqe() {
  return (
    <>
      <img className='esassekil' src={ esassekil }/>
      <img className='bitki' src={ bitki }/>
      <img className='esasbguc' src={ bguc }/>
      <h1 className='esash1'>Əlaqə</h1>
      <Signup />
      <img className='cemen' src={ seher }/>
    </>
  )
}

export default Elaqe
