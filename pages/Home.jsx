import React, { useState } from 'react'
import esassekil from '../img/esassekil.png'
import '../App.css';
import bitki from '../img/bitki.png';
import bizkimikbas from '../img/bizkimikbas.png';
import bguc from '../img/bguc.png';
import terevezler from '../img/terevezler.png';
import yazi from '../img/yazi.png';
import bgitems from '../img/bgitems.png';
import butafason from '../img/butafason.png';
import yarpaq from '../img/yarpaq.png';
import ovuc from '../img/ovuc.png';
import organik from '../img/organik.png';
import urek from '../img/urek.png';
import memnuniyyet from '../img/memnuniyyet.png';
import fidan from '../img/fidan.png';
import lorem from '../img/lorem.png';
import qalxan from '../img/qalxan.png';
import yuksekkeyfiyyet from '../img/yuksekkeyfiyyet.png';
import xidmetlerimizbas from '../img/xidmetlerimizbas.png';
import meyv from '../img/meyv.png';
import terv from '../img/terv.png';
import taxl from '../img/taxl.png';
import dipcek from '../img/dipcek.png';
import sumbul from '../img/sumbul.png';
import tarla from '../img/tarla.png';
import tarla2 from '../img/tarla2.png';
import nolbir from '../img/nolbir.png';
import noliki from '../img/noliki.png';
import noluc from '../img/noluc.png';
import Hamisi from '../components/Hamisi';
import Meyveler from '../components/Meyveler';
import cemen from '../img/cemen.png';
import Terevezler from '../components/Terevezler';
import Taxillar from '../components/Taxillar';

function Home() {
  return (
    <>
      <div className='bgtorpaq'></div>
      <div className='perde'></div>
      <div className='container'>
          <div className='row mtt'>
              <div className='col-md mtt meyv'>
                <div>Meyvələr</div>
                <a href='#tabis'>Daha çox...</a>
                <img src={ meyv }/>
              </div>
              <div className='col-md mtt terv'>
                <div>Tərəvəzlər</div>
                <a href='#tabis'>Daha çox...</a>
                <img src={ terv }/>
              </div>
              <div className='col-md mtt taxl'>
                <div>Taxıl</div>
                <a href='#tabis'>Daha çox...</a>
                <img src={ taxl }/>
              </div>
          </div>
      </div>
      <div className='dipkim'>
        <img className='dipcek' src={ dipcek }/>
        <div>
          <p>Biz kimik?</p>
          <div>
            <img src={ butafason }/>
            <img src={ yarpaq }/>
            <img src={ butafason }/>
          </div>
          <p>Əslində hər şey illər əvvəl İsmayıllı rayonunda  ailəvi gəzintidə olduğumuz zaman baş verdi. İsmayıllı rayonunun füsunkar təbiətinin gözəlliyi bizim bir gün burda kənd təsərufatı ilə məşqul olmaq arzusunu oyatdı. Daha sonra dostlarımızla bu məsələni müzakirə edərək İsmayıllıda təsəruffat qurmağa qərar verdik.
          Böyük uğurlar vaxtında və yerində verilən qərarlarla çox bağlıdır.
          Elə bizdə ilk səfərdə qərar verdik və başladıq.İllər çox serətli keçdi.Bizdə böyümədə zamanın sürətindən geri qalmadıq.Qısa zaman müddətində əldə etdiyimiz uğurlar və daha sürətlə böyüməyə davam etməyimiz işimizə olan sevginin göstəricisidir.
          Alma,armud,nektarin,gavalı,gilas və qoz yetişdirməklə qalmadıq,tingçilik və toxumçuluqla məhsul sıramızı genişləndirdik.
          qısa zamanda ən son texnoloji yeniliklərlə damla suvarma sistemlərinin qurulması BAĞLARIN layihələndirilməsi,salınması kimi çətin işlərin ödəsindən uğurla gəldik.
          2022 ci ildə əsas  hədəfimiz brendimizin "made in AZERBAİJAN" adına layiq ölkə kənarında rəflərdə görünməsidir.
          növbəti hədəfləri sizlərlə paylaşmaq arzusuyla.

          hörmətlə

          MELADORA kollektivi
          </p>
          <div>
            <img src={ butafason }/>
            <img src={ yarpaq }/>
            <img src={ butafason }/>
          </div>
          <div className='footdipkim'>
            <div className='footcell'>
              <img src={ ovuc }/>
              <p>Organik</p>
            </div>
            <div className='footcell'>
              <img src={ urek }/>
              <p>Məmnuniyyət</p>
            </div>
            <div className='footcell'>
              <img src={ fidan }/>
              <p>Lorem</p>
            </div>
            <div className='footcell'>
              <img src={ qalxan }/>
              <p>Yüksək keyfiyyət</p>
            </div>
          </div>
        </div>
        <img className='bguc' src={ bguc }/>
      </div>
      <div className='bagsection'>
        <p className='bizkimbagtit'>Bağlarımız</p>
        <div className='butyarbut'>
          <img src={ butafason }/>
          <img src={ yarpaq }/>
          <img src={ butafason }/>
        </div>
        <div className='bagsecgrid'>
          <div className='ui-grid'>
            <img className='bages' src={ sumbul }/>
            <div className='bagaciqlama'>
              <img src={ nolbir }/>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className='ui-grid'>
            <img className='bages' src={ tarla }/>
            <div className='bagaciqlama'>
              <img src={ noliki }/>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className='ui-grid'>
            <img className='bages' src={ tarla2 }/>
            <div className='bagaciqlama'>
              <img src={ noluc }/>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='parmehsulgrid'>
        <p className='bizkimbagtit'>Məhsullarımız</p>
        <div className='butyarbut'>
          <img src={ butafason }/>
          <img src={ yarpaq }/>
          <img src={ butafason }/> 
        </div>
        <div className="container py-4" id='tabis'>
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

      </div>

      


      <img className='cemen' src={ cemen }/>
    </>
  )
}

export default Home
