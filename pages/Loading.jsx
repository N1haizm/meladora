import React from 'react';
import { Circles } from  'react-loader-spinner';
import '../App.css';

const Loading = () => {
  return (
    <div className='yukleme'>
      <Circles
        height="90"
        width="90"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loading
