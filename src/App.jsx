import React, { useEffect, useState } from 'react';
import './App.css';
import Playbar from '../src/components/playbar/Playbar';
import axios from 'axios';

import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';









function App() {
  const [item, setItem] = useState([])
  const [audio,setAudio] = useState(false)
  const [onListen, setOnListen] = useState("")
  
 const handleSong = () => {
   setOnListen(item[5].s3_link)
 }

  useEffect(async () => {
      const getSongs = () => {
        axios.get("https://bazify-backend.basile.vernouillet.dev/api/v1/songs").then((res) => {
          setItem(res.data)
          console.log(res.data)
        })
      }
      getSongs()
   },[]);


  
  return (
    <div>
      
      <Playbar handleSong={handleSong} onListen={onListen} setOnListen={setOnListen} audio={audio} setAudio={setAudio} item={item}/>
     
    </div>
  );
}

export default App;
