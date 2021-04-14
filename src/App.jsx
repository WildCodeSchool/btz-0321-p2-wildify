import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useWindowDimensions from './Hooks/useWindowDimension';
import Playbar from '../src/components/playbar/Playbar';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar';
import Contact from './components/Contact/Contact';

function App() {
  const [isSideBarVisible, setisSideBarVisible] = useState(false);
  const { width } = useWindowDimensions();
  const [item, setItem] = useState([]);
  const [audio, setAudio] = useState(false);
  const [onListen, setOnListen] = useState('');
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(async () => {
    const getSongs = () => {
      axios.get('https://bazify-backend.basile.vernouillet.dev/api/v1/songs').then((res) => {
        setItem(res.data);
      });
    };
    getSongs();
  }, []);

  useEffect(() => {
    if (width < 768) {
      setisSideBarVisible(false);
    } else {
      setisSideBarVisible(true);
    }
  }, [width]);

  const handleSong = () => {
    setOnListen(item[currentTrack].s3_link);
  };
  const handleSideBar = () => {
    setisSideBarVisible(true);
  };
  return (
    <div className="flex align-middle justify-center">
      <div className="grid  gap-5  900:gap-6 grid-cols-mobile grid-rows-mobile 900:grid-cols-desktop 900:ml-6 900:mr-0 900:grid-rows-desktop">
        <Header handleSideBar={handleSideBar} isSideBarVisible={isSideBarVisible} />

        <div className="col-start-1 col-end-3 row-start-2 900:col-end-4 rounded-20 bg-black bg-opacity-10 shadow-layoutContainer">
          {/* The Main Component GoHere */}
        </div>

        <div className="col-start-1 col-end-3 row-start-3 row-end-4 900:col-end-2 900:row-end-5 rounded-20 bg-black bg-opacity-20 shadow-layoutContainer"></div>

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
          <Contact />
        </div>
        {isSideBarVisible && <SideBar />}
      </div>
      <Playbar
        handleSong={handleSong}
        onListen={onListen}
        setOnListen={setOnListen}
        audio={audio}
        setAudio={setAudio}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        item={item}
      />
    </div>
  );
}

export default App;
