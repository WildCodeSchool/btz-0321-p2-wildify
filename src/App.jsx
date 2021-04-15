import React, { useState, useEffect } from 'react';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar';
/*import Playlist from './components/Playlist/playlist';*/
import PlaylistOnclick from './components/Playlist/playlistOnclick';

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
    <div className="grid  gap-5  900:gap-6 mx-5 grid-cols-mobile grid-rows-mobile 900:grid-cols-desktop 900:ml-6 900:mr-0 900:grid-rows-desktop">
      <Header />

      <div className="col-start-1 col-end-3 row-start-2 900:col-end-4 rounded-20 bg-black bg-opacity-10 shadow-layoutContainer">
        {/* The Main Component GoHere */}
      </div>

      <div className="col-start-1 col-end-3 row-start-3 row-end-4 900:col-end-2 900:row-end-5 rounded-20 bg-black bg-opacity-20 shadow-layoutContainer">
        {/*<Playlist />*/}
        <PlaylistOnclick />
      </div>

      <div className="col-start-1 col-end-2 row-start-4 row-end-5 gap-x-1 900:col-start-2 900:col-end-3 900:row-start-3 900:row-end-4  rounded-20 bg-black bg-opacity-20 shadow-layoutContainer">
        {/* ArtistComponent GoHere */}{' '}
      </div>
      <div className="col-start-2 col-end-3 row-start-4 rows-end-5 900:col-start-3 900:col-end-4 900:row-start-3 900:row-end-4 rounded-20 gap-x-1 bg-black bg-opacity-20 shadow-layoutContainer">
        {/* AlbumComponent GoHere */}{' '}
      </div>

      <div className="col-start-1 col-end-3 row-start-5 row-end-6 rounded-20 900:col-start-2 900:col-end-4 900:row-start-4 900:row-end-5 bg-black bg-opacity-20 shadow-layoutContainer">
        {/* MixtapesComponent GoHere */}
      </div>

      <div className="col-start-1 col-end-3 row-start-6 row-end-7 rounded-20 900:col-end-4 900:row-start-5 900:row-end-6 bg-black bg-opacity-20 shadow-layoutContainer mb-4">
        {/* ContactFormComponent GoHere */}
      </div>
      {isSideBarVisible && <SideBar />}
    </div>
  );
}

export default App;
