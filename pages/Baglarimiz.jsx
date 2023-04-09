import React from 'react'
import esassekil from '../img/esassekil.png'
import bitki from '../img/bitki.png';
import bguc from '../img/bguc.png';
import '../App.css';
import seher from '../img/seher.png';
import sumbul from '../img/sumbul.png';
import tarla from '../img/tarla.png';
import tarla2 from '../img/tarla2.png';
import nolbir from '../img/nolbir.png';
import noliki from '../img/noliki.png';
import noluc from '../img/noluc.png';
import bgitems from '../img/bgitems.png';


function Baglarimiz() {
  return (
  <>
    <img className='esassekil' src={ esassekil }/>
    <img className='bitki' src={ bitki }/>
    <img className='esasbguc' src={ bguc }/>
    <h1 className='esash1'>Bağlarımız</h1>

    <div className='baghis'>
      <div className='sumbir'>
        <div><img src={ sumbul }/></div>
        <div>
          <img src={ nolbir }/>
          <div>BAĞ</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className='tariki'>
        <div>
          <img src={ noliki }/>
          <div>BAĞ</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div><img src={ tarla } /></div>
      </div>
      <div className='taruc'>
        <div><img src={ tarla2 }/></div>
        <div>
          <img src={ noluc }/>
          <div>BAĞ</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>

    <img className='bgitemskimik kimikdekibgitems' src={ bgitems }/>
    <img className='cemen' src={ seher }/>
  </>
  )
}

export default Baglarimiz
