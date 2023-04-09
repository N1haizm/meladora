import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading';
import Aplicat from './pages/Aplicat';
import Meladora from './img/meladora.png';
import Agmeladora from './img/agmeladora.png';
import agappaqmeladora from './img/agappaqmeladora.png';
import boyukmeladora from './img/boyukmeladora.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    }, 1000)
  })

  const location = useLocation();
  return (
  <>
    {isLoading==true? <Loading/>:
    location.pathname=='/'? <Aplicat reng="white" melsek={ Agmeladora } footmel={ agappaqmeladora }/>:
    <Aplicat reng="black" melsek={  Meladora } footmel={ boyukmeladora }/>}
  </>
  );
  
}

export default App;
