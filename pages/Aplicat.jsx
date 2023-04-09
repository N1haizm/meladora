import React, { useState } from 'react';
import { Routes, Route,  NavLink } from 'react-router-dom';
import Baglarimiz from '../pages/Baglarimiz';
import Home from '../pages/Home';
import Mehsullarimiz from '../pages/Mehsullarimiz'
import SosialMesuliyyet from '../pages/SosialMesuliyyet';
import Xidmetlerimiz from '../pages/Xidmetlerimiz';
import BizKimik from '../pages/BizKimik';
import telicon from '../img/telicon.png';
import Elaqe from '../pages/Elaqe';
import '../App.css';

function Aplicat(props) {

  return (
    <> 
      <div className='container'>
       <div className='ust-header'>
         <img src={ telicon }/>
         <div className='sagaver' style={{color:props.reng}}>+994 (70) 5555777</div>
          <a href='https://facebook.com'><i class="fa-brands fa-facebook-f"></i></a>
          <a href='https://linkedin.com'><i class="fa-brands fa-linkedin-in"></i></a>
          <a href='https://twitter.com'><i class="fa-brands fa-twitter"></i></a>
          <a href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://youtube.com'><i class="fa-brands fa-youtube"></i></a>
       </div>

       <ul className='alt-header'>
         <li>
           <NavLink to="/">                                 
             <img src={ props.melsek }/>
           </NavLink>
         </li>

         <a href='#' className='toggle-button' id='menubutton'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
         </a>
         <li>
           <NavLink to="/bizkimik">
             <div style={{color:props.reng}}>Biz kimik?</div>
           </NavLink>
         </li>

         <li>
           <NavLink to="/baglarimiz">
             <div style={{color:props.reng}}>Bağlarımız</div>
           </NavLink>
         </li>

         <li>
           <NavLink to="/mehsullarimiz">
             <div style={{color:props.reng}}>Mehsullarımız</div>
           </NavLink>
         </li>

         <li>
           <NavLink to="/xidmetlerimiz">
             <div style={{color:props.reng}}>Xidmətlərimiz</div>
           </NavLink>
         </li>

         <li>
           <NavLink to="/sosialmesuliyyet">
             <div style={{color:props.reng}}>Sosial məsuliyyət</div>
           </NavLink>
         </li>

         <li>
           <NavLink to="/elaqe">
             <div style={{color:props.reng}}>Əlaqə</div>
           </NavLink> 
         </li>

         <li>
           <i style={{color:props.reng}} class="fa-solid fa-magnifying-glass" data-toggle="modal" data-target="#exampleModalCenter"></i>

           <div class="modal fade axitar" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-footer">
                  <input type="text" placeholder='Axtar'/>
                  <button className='modalaxtar' type='button'>Axtar</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Bağla</button>
                </div>
              </div>
            </div>
          </div>
         </li>
       </ul>
      </div>

     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/bizkimik' element={<BizKimik/>}></Route>
       <Route path='/baglarimiz' element={<Baglarimiz/>}></Route>
       <Route path='/mehsullarimiz' element={<Mehsullarimiz/>}></Route>
       <Route path='/xidmetlerimiz' element={<Xidmetlerimiz/>}></Route>
       <Route path='/sosialmesuliyyet' element={<SosialMesuliyyet/>}></Route>
       <Route path='/elaqe' element={<Elaqe/>}></Route>
     </Routes>
    
    <div className='container footercon'>
      <div className='ust-footer'>
          <div className='footsek'>
            <a href='/'><img src={ props.footmel }/></a>
          </div>
          <div className='qalxmali1'>
            <div className='foothed' style={{color:props.reng, fontWeight: 'bold'}}>Xidmətlərimiz</div>
            <a href='/baglarimiz'><div style={{color:props.reng}}>Bağlarımız</div></a>
            <a href='/bizkimik'><div style={{color:props.reng}}>Galareya</div></a>
            <a href='/mehsullarimiz'><div style={{color:props.reng}}>Məhsullarımız</div></a>
          </div>
          <div className='qalxmali2'>
            <div className='foothed' style={{color:props.reng, fontWeight: 'bold'}}>Menyular</div>
            <a href='/bizkimik'><div style={{color:props.reng}}>Biz kimik?</div></a>
            <a href='/baglarimiz'><div style={{color:props.reng}}>Bağlarımız</div></a>
            <a href='/mehsullarimiz'><div style={{color:props.reng}}>Məhsullarımız</div></a>
            <a href='/xidmetlerimiz'><div style={{color:props.reng}}>Xidmətlərimiz</div></a>
            <a href='/sosialmesuliyyet'><div style={{color:props.reng}}>Sosial məsuliyyət</div></a>
            <a href='/elaqe'><div style={{color:props.reng}}>Əlaqə</div></a>
          </div>
      </div>
      <div className='alt-footer'>
        <div style={{color:props.reng}}>Copyright 2022 - <span>mela-dora.com</span></div>
        <div style={{color:props.reng}}>Powered by <span>N1haizm</span></div>
      </div>
    </div>
   </>
  )
}

export default Aplicat
