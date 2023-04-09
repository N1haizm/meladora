import React from 'react';
import esassekil from '../img/esassekil.png';
import bitki from '../img/bitki.png';
import bguc from '../img/bguc.png';
import '../App.css';
import seher from '../img/seher.png';
import terevezler from '../img/terevezler.png';
import qalxan from '../img/qalxan.png';
import fidan from '../img/fidan.png';
import urek from '../img/urek.png';
import ovuc from '../img/ovuc.png';
import butafason from '../img/butafason.png';
import yarpaq from '../img/yarpaq.png';
import bgitems from '../img/bgitems.png';
import Carousel from 'react-elastic-carousel';
import Card from '../components/Card';
import sumbul from '../img/sumbul.png';
import dipcek from '../img/dipcek.png';
import tarla from '../img/tarla.png';
import tarla2 from '../img/tarla2.png';
import sulama from '../img/sulama.png';
import cardelavesekil1 from '../img/cardelavesekil1.jpeg';
import cardelavesekil2 from '../img/cardelavesekil2.jpeg';
import cardelavesekil3 from '../img/cardelavesekil3.jpeg';
import cardelavesekil4 from '../img/cardelavesekil4.jpeg';
import cardelavesekil5 from '../img/cardelavesekil5.jpeg';
import cardelavesekil6 from '../img/cardelavesekil6.jpeg';
import cardelavesekil7 from '../img/cardelavesekil7.jpeg';
import cardelavesekil8 from '../img/cardelavesekil8.jpeg';
import cardelavesekil9 from '../img/cardelavesekil9.jpeg';
import cardelavesekil10 from '../img/cardelavesekil10.jpeg';
import cardelavesekil11 from '../img/cardelavesekil11.jpeg';
import cardelavesekil12 from '../img/cardelavesekil12.jpeg';

function BizKimik() {
  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 700, itemsToShow: 2},
    {width: 1000, itemsToShow: 3}
  ]

  return (
    <>
      <img className='esassekil' src={ esassekil }/>
      <img className='bitki' src={ bitki }/>
      <img className='esasbguc' src={ bguc }/>
      <h1 className='esash1'>Biz kimik?</h1>
      <div className='basloremenke'>
          <div className='loremkimik'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime quas ipsam, quasi corporis, dolor, in nisi quia neque cupiditate enim incidunt! Similique blanditiis deserunt, soluta veniam debitis, expedita porro sit deleniti dolore minus corporis suscipit natus ex eligendi ipsam non fuga consectetur cupiditate tenetur vero <br/>at molestias eveniet. Repudiandae officiis ab delectus.<br/> Pariatur ducimus dolores odio commodi deleniti placeat necessitatibus ea cum quos! Tenetur nesciunt ut voluptatem, mollitia accusamus animi quasi sunt eos aut expedita perspiciatis tempora explicabo <br/>  temporibus molestiae.<br/> Harum corrupti architecto ratione sint temporibus ab expedita eligendi voluptates eveniet! Dolores nemo,<br/> quam voluptates<br/> doloremque laudantium animi sed porro, dolorum reiciendis placeat labore molestias, quas maiores odio quia incidunt id. Perferendis minima recusandae debitis aliquid est blanditiis corrupti <br/> eveniet quidem deserunt<br/> voluptate a vitae doloribus maiores, iusto voluptatum dicta? Unde ipsum vitae iure blanditiis vel et aliquid, alias quaerat id dolorem reiciendis, odit quas hic perspiciatis quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum <br/> sint deserunt reiciendis quam, expedita, ratione minus<br/> rem maxime consectetur unde inventore impedit voluptates illo quos? <br/><br/> hörmətlə <br/><br/>MELADORA kollektivi</p>
            <div className='buzibiliboyudek'>
              <img src={ butafason }/>
              <img src={ yarpaq }/>
              <img src={ butafason }/>
            </div>
            <div className='footdipkim footdipkim2'>
              <div className='footcell footcell2'>
                <img src={ ovuc }/>
                <p>Organik</p>
              </div>
              <div className='footcell footcell2'>
                <img src={ urek }/>
                <p>Məmnuniyyət</p>
              </div>
              <div className='footcell footcell2'>
                <img src={ fidan }/>
                <p>Lorem</p>
              </div>
              <div className='footcell footcell2'>
                <img src={ qalxan }/>
                <p>Yüksək keyfiyyət</p>
              </div>
            </div>
          </div>
          <img src={ terevezler }/>
          <img className='bgitemskimik' src={ bgitems }/>
      </div>

      <div className='galareyaumumi'>
        <p>Galareya</p>
        <div className='butyarbut'>
          <img src={ butafason }/>
          <img src={ yarpaq }/>
          <img src={ butafason }/> 
        </div>

        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2000}>
          <Card birinci={ sumbul } ikinci={ dipcek }/>
          <Card birinci={ tarla } ikinci={ esassekil }/>
          <Card birinci={ tarla2 } ikinci={ sulama }/>
          <Card birinci={ cardelavesekil1 } ikinci={ cardelavesekil2 }/>
          <Card birinci={ cardelavesekil3 } ikinci={ cardelavesekil4 }/>
          <Card birinci={ cardelavesekil5 } ikinci={ cardelavesekil6 }/>
          <Card birinci={ cardelavesekil7 } ikinci={ cardelavesekil8 }/>
          <Card birinci={ cardelavesekil9 } ikinci={ cardelavesekil10 }/>
          <Card birinci={ cardelavesekil11 } ikinci={ cardelavesekil12 }/>
        </Carousel>

      </div>
      <img className='galaustbguc' src={ bguc }/>
      <img className='cemen' src={ seher }/>
    </>
  )
}

export default BizKimik
