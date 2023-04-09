import React from 'react'
import esassekil from '../img/esassekil.png'
import bitki from '../img/bitki.png';
import sosialmesuliyyetbas from '../img/sosialmesuliyyetbas.png';
import bguc from '../img/bguc.png';
import '../App.css';
import seher from '../img/seher.png'

function SosialMesuliyyet() {
  return (
    <>
      <img className='esassekil' src={ esassekil }/>
      <img className='bitki' src={ bitki }/>
      <img className='esasbguc' src={ bguc }/>
      <h1 className='esash1'>Sosial məsuliyyət</h1>
      <div className='sosialmesyazi'>
      <p>Sahibkar olaraq təkcə qazanc əldə etmək deyil həmdə cəmiyyətə müxtəlif sahələrdə faydalı olmağın<br/> zəruriliyini anlayırıq və bu istiqamətdə fəaliyyətlərimiz davam edir. Əhalinin müəyyən<br/> təbəqələrinin həyatını yaxşılaşdırmaq üçün sosial əhəmiyyətli proqramlar həyata keçirik.<br/><br/> Dostlarımız və çevrəmiz bizi yaxşı tanıyır.<br/><br/> Və biz sosial yönümlü şirkət olmaqdan qürur duyuruq.</p>
      </div>
      <img className='cemen' src={ seher }/>
    </>
  )
}

export default SosialMesuliyyet
