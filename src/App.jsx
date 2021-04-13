import React, { useEffect, useState } from 'react';
import './App.css';
import Playbar from '../src/components/playbar/Playbar';
// import axios from 'axios';


function App() {
  const [item, setItem] = useState()
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(()=>{
    fetch("https://bazify-backend.basile.vernouillet.dev/api/v1/songs")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItem(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
   
  },[])



  
  return (
    <div>
      <Playbar item={item}/>
    </div>
  );
}

export default App;
