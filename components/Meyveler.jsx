import React from 'react';
import alma from '../img/alma.png';
import gavali from '../img/gavali.png';
import armud from '../img/armud.png';
import behli from '../img/behli.png';
import portagal from '../img/portagal.png';
import saftali from '../img/saftali.png';
import portagalmodal1 from '../img/portagalmodal1.jpeg';
import portagalmodal2 from '../img/portagalmodal2.jpeg';
import portagalmodal3 from '../img/portagalmodal3.jpeg';
import saftalimodal1 from '../img/saftalimodal1.jpeg';
import saftalimodal2 from '../img/saftalimodal2.jpeg';
import saftalimodal3 from '../img/saftalimodal3.jpeg';
import behlimodal1 from '../img/behlimodal1.jpeg';
import behlimodal2 from '../img/behlimodal2.jpeg';
import behlimodal3 from '../img/behlimodal3.jpeg';
import armudmodal1 from '../img/armudmodal1.webp';
import armudmodal2 from '../img/armudmodal2.jpeg';
import armudmodal3 from '../img/armudmodal3.jpeg';
import almamodal1 from '../img/almamodal1.jpeg';
import almamodal2 from '../img/almamodal2.webp';
import almamodal3 from '../img/almamodal3.jpeg';
import gavalimodal1 from '../img/gavalimodal1.jpeg';
import gavalimodal2 from '../img/gavalimodal2.webp';
import gavalimodal3 from '../img/gavalimodal3.jpeg';

function Meyveler() {
  return (
    <div class="mehsulgrid">
      <div data-toggle='modal' data-target='#examplModalMerkez'>
          <div>
            <img src={ alma }/>
          </div>
          
          <div>
            <p>Alma</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="examplModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={alma} />
                      <div>
                        <p>Alma</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={almamodal1} />
                      <img src={almamodal2} />
                      <img src={almamodal3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>

      <div data-toggle='modal' data-target='#exampModalMerkez'>
          <div>
            <img src={ gavali }/>
          </div>
          
          <div>
            <p>Gavalı</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="exampModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div className="modal-header">
                  <div className="almamodal">
                    <img src={ gavali} />
                    <div>
                      <p>Gavalı</p>
                      <p>5 	&#8380;</p>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                    </div>
                  </div>
                  <div className='almamodalalt'>
                    <img src={ gavalimodal1 } />
                    <img src={ gavalimodal2 } />
                    <img src={ gavalimodal3 } />
                  </div>
                </div>
                </div>
              </div>
            </div>
      </div>


      <div data-toggle='modal' data-target='#examModalMerkez'>
          <div>
            <img src={ armud }/>
          </div>
          
          <div>
            <p>Armud</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="examModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ armud } />
                      <div>
                        <p>Armud</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ armudmodal1 } />
                      <img src={ armudmodal2 } />
                      <img src={ armudmodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <div data-toggle='modal' data-target='#exaModalMerkez'>
          <div>
            <img src={ behli }/>
          </div>
          
          <div>
            <p>Gilas</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="exaModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ behli } />
                      <div>
                        <p>Gilas</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ behlimodal1 } />
                      <img src={ behlimodal2 } />
                      <img src={ behlimodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>

      <div data-toggle='modal' data-target='#exModalMerkez'>
          <div>
            <img src={ saftali }/>
          </div>
          
          <div>
            <p>Şaftalı</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="exModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ saftali } />
                      <div>
                        <p>Şaftalı</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ saftalimodal3 } />
                      <img src={ saftalimodal2 } />
                      <img src={ saftalimodal1 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>

      <div data-toggle='modal' data-target='#eModalMerkez'>
          <div>
            <img src={ portagal }/>
          </div>
          
          <div>
            <p>Portağal</p>
            <p>5 	&#8380;</p>
          </div>

          <div class="modal fade promod" id="eModalMerkez" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div className="modal-header">
                    <div className="almamodal">
                      <img src={ portagal } />
                      <div>
                        <p>Portağal</p>
                        <p>5 	&#8380;</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum consequatur dolor eius, atque ratione non ut, repellendus nesciunt temporibus quasi laudantium perferendis amet accusamus quia! Nostrum repellendus doloremque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque molestiae error consequatur aliquid, velit illum excepturi odio rerum mollitia.</p>
                      </div>
                    </div>
                    <div className='almamodalalt'>
                      <img src={ portagalmodal1 } />
                      <img src={ portagalmodal2 } />
                      <img src={ portagalmodal3 } />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
  )
}

export default Meyveler
