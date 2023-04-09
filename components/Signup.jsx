import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validations';
import aglapatqa from '../img/aglapatqa.png';
import aglocation from '../img/aglocation.png';
import agtelefon from '../img/agtelefon.png';

function Signup() {
  const {handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div className='signupformik'>
      <div className='signupqeyd'>
        <form onSubmit={handleSubmit}>
          <h3>Müraciət Formu</h3>
          <input name='name' value={values.name} onChange={handleChange} placeholder="Adınız, Soyadınız*"/>

          <input type="text" placeholder='Telefon*'></input>

          <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="E-poçt*"/>

          { errors.email && touched.email && <div className='error'>{errors.email}</div>}

          <input type="text" placeholder='Mesajınız'/>
          
          <p>
          <button type='submit'>Göndər</button>
          </p>
          

        </form>
      </div>
      <div className='signupyahis'>
        <img src={ agtelefon } />
        <p>+994 (70) 5555777</p>
        <img src={ aglapatqa } />
        <p>İstehsal; <br /> İSMAYILLI ray,Qalıncaq kəndi <br />tel;</p>
        <img src={ aglocation } />
        <p>MELADORA mmc <br /> Baş ofis ; <br />BAKI,</p>
        <div className='signupsosmed'>
          <div><a href='https://facebook.com' target='_blank'><i class="fa-brands fa-facebook-f"></i></a></div>
          <div><a href='https://instagram.com' target='_blank'><i class="fa-brands fa-instagram"></i></a></div>
          <div><a href='https://twitter.com' target='_blank'><i class="fa-brands fa-twitter"></i></a></div>
        </div>
      </div>
    </div>
  )
}

export default Signup

