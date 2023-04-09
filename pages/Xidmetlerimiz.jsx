import React from 'react'
import esassekil from '../img/esassekil.png'
import bitki from '../img/bitki.png';
import bguc from '../img/bguc.png';
import '../App.css';
import seher from '../img/seher.png'
import suvarma from '../img/suvarma.png';
import layihelendirme from '../img/layihelendirme.png';
import teslimbag from '../img/teslimbag.png';


function Xidmetlerimiz() {
  return (
    <>
      <img className='esassekil' src={ esassekil }/>
      <img className='bitki' src={ bitki }/>
      <img className='esasbguc' src={ bguc }/>
      <h1 className='esash1'>Xidmətlərimiz</h1>
      <div className='xidmetumumi'>
        <div>
          <img src={ suvarma }/>
          <p>Damcı suvarma sistemləri</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius cumque ipsum iure tenetur explicabo reiciendis delectus omnis, ullam quasi fugiat, numquam esse nisi eaque.</p>
        </div>
        <div>
          <img src={ layihelendirme  }/>
          <p>Layihələndirmə</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloremque, laborum aperiam aut dolorem blanditiis magnam vitae, atque iste harum molestiae ipsam voluptatem obcaecati fugit.</p>
        </div>
        <div>
          <img src={ teslimbag }/>
          <p>Açar təslim bağlarının salınması</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, pariatur vitae, beatae ducimus, architecto facilis dignissimos ab non consequatur vel consequuntur quisquam eveniet. Iste, ducimus.</p>
        </div>
      </div>
      <img className='cemen' src={ seher }/>
    </>
  )
}

export default Xidmetlerimiz
