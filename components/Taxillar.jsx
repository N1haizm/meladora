import React from 'react';
import sunbul from '../img/sunbul.png';
import ting from '../img/ting.png';
import arpamodal1 from '../img/arpamodal1.jpeg';
import arpamodal2 from '../img/arpamodal2.jpeg';
import arpamodal3 from '../img/arpamodal3.jpeg';
import tingmodal1 from '../img/tingmodal1.jpeg';
import tingmodal2 from '../img/tingmodal2.jpeg';
import tingmodal3 from '../img/tingmodal3.jpeg';


const Taxillar = () => {
  return (
    <div class="mehsulgrid">
      <div data-toggle='modal' data-target='#misModalMerkez'>
          <div>
            <img src={ sunbul }/>
          </div>
          
          <div>
            <p>Taxıl</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="misModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ sunbul } />
                      <div>
                        <p>Taxıl</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ arpamodal1 } />
                      <img src={ arpamodal2 } />
                      <img src={ arpamodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>

      <div data-toggle='modal' data-target='#miModalMerkez'>
          <div>
            <img src={ ting }/>
          </div>
          
          <div>
            <p>Müxtəlif tinglər</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="miModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ ting } />
                      <div>
                        <p>Müxtəlif tinglər</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ tingmodal1 } />
                      <img src={ tingmodal2 } />
                      <img src={ tingmodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
  )
}

export default Taxillar
