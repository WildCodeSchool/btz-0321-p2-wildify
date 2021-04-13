import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar';
import Playlist from './components/Playlist/playlist';
import useWindowDimensions from './Hooks/useWindowDimension';

function App() {
  const [isSideBarVisible, setisSideBarVisible] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 768) {
      setisSideBarVisible(false);
    } else {
      setisSideBarVisible(true);
    }
  }, [width]);

  return (
    <div className="grid gap-3 mx-3 grid-cols-mobile grid-rows-mobile md:grid-cols-desktop md:ml-6 md:grid-rows-desktop">
      <Header />

      <div className="col-start-1 col-end-3 row-start-2 md:col-end-4 rounded-20 bg-black">{/* The Main Component GoHere */}</div>

      <div className="col-start-1 col-end-3 row-start-3 row-end-4 md:col-end-2 md:row-end-5 rounded-20 bg-black">
        <Playlist />
      </div>

      <div className="col-start-1 col-end-2 row-start-4 row-end-5 gap-x-1 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4  rounded-20 bg-red-500 z-10">
        {/* ArtistComponent GoHere */}{' '}
      </div>
      <div className="col-start-2 col-end-3 row-start-4 rows-end-5 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 rounded-20 gap-x-1 bg-black">
        {/* AlbumComponent GoHere */}{' '}
      </div>

      <div className="col-start-1 col-end-3 row-start-5 row-end-6 rounded-20 md:col-start-2 md:col-end-4 md:row-start-4 md:row-end-5 bg-black">
        {/* MixtapesComponent GoHere */}
      </div>

      <div className="col-start-1 col-end-3 row-start-6 row-end-7 rounded-20 md:col-end-4 md:row-start-5 md:row-end-6 bg-black mb-4">
        {/* ContactFormComponent GoHere */}
      </div>
      {isSideBarVisible && <SideBar />}
    </div>
  );
}

export default App;
