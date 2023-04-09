import React from 'react';
import qoz from '../img/qoz.png';
import pomidor from '../img/pomidor.png';
import qozmodal1 from '../img/qozmodal1.webp';
import qozmodal2 from '../img/qozmodal2.webp';
import qozmodal3 from '../img/qozmodal3.jpeg';
import pomidormodal1 from '../img/pomidormodal1.jpeg';
import pomidormodal2 from '../img/pomidormodal2.jpeg';
import pomidormodal3 from '../img/pomidormodal3.jpeg';

const Terevezler = () => {
  return (
    <div class="mehsulgrid">

      <div data-toggle='modal' data-target='#misalModalMerkez'>
          <div>
            <img src={ pomidor }/>
          </div>
          
          <div>
            <p>Pomidor</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="misalModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ pomidor } />
                      <div>
                        <p>Pomidor</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ pomidormodal1 } />
                      <img src={ pomidormodal2 } />
                      <img src={ pomidormodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
      
      <div data-toggle='modal' data-target='#misaModalMerkez'>
          <div>
            <img src={ qoz }/>
          </div>
          
          <div>
            <p>Qoz</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="misaModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ qoz } />
                      <div>
                        <p>Qoz</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ qozmodal1 } />
                      <img src={ qozmodal2 } />
                      <img src={ qozmodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
  )
}

export default Terevezler
