import React from 'react';
import esassekil from '../img/esassekil.png';
import bitki from '../img/bitki.png';
import bguc from '../img/bguc.png';
import '../App.css';
import seher from '../img/seher.png';
import Meyveler from '../components/Meyveler';
import Taxillar from '../components/Taxillar';
import Hamisi from '../components/Hamisi';
import Terevezler from '../components/Terevezler';


function Mehsullarimiz() {
  return (
    <>
      <img className='esassekil' src={ esassekil }/>
      <img className='bitki' src={ bitki }/>
      <img className='esasbguc' src={ bguc }/>
      <h1 className='esash1'>Məhsullarımız</h1>

      <div className="container py-4">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Hamısı</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Meyvələr</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Tərəvəzlər</button>
                </li>
                <li className='nav-item' role="presentation">
                    <button className='nav-link' id='pills-taxillar-tab' data-bs-toggle='pill' data-bs-target='#pills-taxillar' type='button' role="tab" aria-controls='pills-taxillar' aria-selected="false">Taxıllar</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <Hamisi />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <Meyveler />
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <Terevezler />
                </div>
                <div className="tab-pane fade" id="pills-taxillar" role="tabpanel" aria-labelledby="pills-taxillar-tab">
                  <Taxillar />
                </div>
            </div>
        </div>

      <img className='cemen' src={ seher }/>
    </>
  )
}

export default Mehsullarimiz
