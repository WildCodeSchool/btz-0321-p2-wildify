
import React, { useEffect, useState } from 'react';
import './App.css';
import Playbar from '../src/components/playbar/Playbar';
import axios from 'axios';

import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';
import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar';
import Playbar from '../src/components/playbar/Playbar';
import OnListen from './feature/apicall/OnListen';
import Playlist from './components/Playlist/playlist';


function App() {
  return (
    <div className="grid grid-cols-playlist grid-rows-rowHeight w-screen gap-4 pl-4">
      <Header />

      <div className="col-start-1 col-end-4 row-start-2 bg-black">{/* The Main Component GoHere */}</div>

      <div className="col-start-1 col-end-2 row-start-3 row-end-5 bg-black">
        <Playlist />
      </div>

      <div className="col-start-2 col-end-3 row-start-3 rows-end-4 rounded-20 bg-black opacity-25 shadow-lg">{/* ArtistComponent GoHere */} </div>
      <div className="col-start-3 col-end-4 row-start-3 rows-end-4 rounded-20 bg-black">{/* AlbumComponent GoHere */} </div>


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
     

      <div className="col-start-2 col-end-4 row-start-4 row-end-5 rounded-20 bg-black">{/* MixtapesComponent GoHere */}</div>

      <div className="col-start-1 col-end-4 row-start-5 row-end-6 rounded-20 bg-black mb-4">{/* ContactFormComponent GoHere */} </div>
      <SideBar />

    </div>
  );
}

export default App;
