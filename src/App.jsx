import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useWindowDimensions from './Hooks/useWindowDimension';
import Playbar from '../src/components/playbar/Playbar';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar';
import Contact from './components/Contact/Contact';
import Carousel from './components/carousel/Carousel';
import Player from './components/Player/Player';
import PlaylistSwitch from './components/Playlist/PlaylistSwitch';
import SliderAlbum from './components/Slider/SliderAlbum';
import bg from './img/BackGrounds/BackGround1.webp';
import PlayerMobile from './components/PlayerMobile/PlayerMobile';
function App() {
  const [isSideBarVisible, setisSideBarVisible] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [isMobilePlayerVisible, setIsMobilePlayerVisible] = useState(true);
  const { width } = useWindowDimensions();
  const [item, setItem] = useState([]);
  const [audio, setAudio] = useState(false);
  const [onListen, setOnListen] = useState('');
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const [picture, setPicture] = useState();
  const [isPlaySwitch, setIsPlaySwitch] = useState(true);
  const [sideBarClass, setSideBarClass] = useState(
    'flex h-screen w-3/12 fixed right-0 flex-col  900:col-start-4 900:col-end-5 900:row-start-1 900:row-span-6 bg-bgPlaybar  shadow-playbar',
  );
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const token = localStorage.getItem('token');
  console.log(token);
  useEffect(() => {
    const getDatas = async () => {
      const [resSongs, resArtists, resAlbums] = await Promise.all([
        axios.get('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('https://bazify-backend.basile.vernouillet.dev/api/v1/artists', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('https://bazify-backend.basile.vernouillet.dev/api/v1/albums', { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      setItem(resSongs.data);
      setAlbums(resAlbums.data);
      setArtists(resArtists.data);
      setIsLoading(false);
    };
    getDatas();
  }, []);

  useEffect(() => {
    if (width < 768) {
      setisSideBarVisible(false);
      setIsMobilePlayerVisible(true);
    } else {
      setisSideBarVisible(true);
      setIsMobilePlayerVisible(false);
      setIsPlayerVisible(false);
    }
  }, [width]);

  const handleSong = () => {
    setOnListen(item[currentTrack].s3_link);
  };
  const handleSideBar = () => {
    isSideBarVisible ? setisSideBarVisible(false) : setisSideBarVisible(true);
    isSideBarVisible
      ? setSideBarClass('flex fixed  h-screen  flex-col  900:col-start-5 900:col-end-6 900:row-start-1 900:row-span-6 bg-bgPlaybar shadow-playbar')
      : setSideBarClass(
          'flex fixed z-50 flex-col h-screen w-screen  top-0 right-0 900:col-start-4 900:col-end-5 900:row-start-1 900:row-span-6 bg-bgPlaybar  shadow-playbar',
        );
  };
  return (
    <div
      className="flex align-middle justify-center pb-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="grid mx-5 gap-5  900:gap-6 grid-cols-mobile grid-rows-mobile 900:grid-cols-desktop 900:ml-6 900:mr-0 900:grid-rows-desktop">
        <Header handleSideBar={handleSideBar} isSideBarVisible={isSideBarVisible} />

        <div className="col-start-1 col-end-3 row-start-2 900:col-end-4 rounded-20 bg-black bg-opacity-10 shadow-layoutContainer">
          {/* The Main Component GoHere */}
          {!isLoading && <Carousel item={item} albums={albums} artists={artists} />}
        </div>

        <div className=" overflow-y-auto col-start-1 col-end-3 row-start-3 row-end-4 900:col-end-2 900:row-end-5 rounded-20 bg-black bg-opacity-20 shadow-layoutContainer">
          {!isLoading && <PlaylistSwitch item={item} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack} />}
          {/* />*/}
        </div>

        <div className="col-start-1 col-end-2 row-start-4 row-end-5 gap-x-1 900:col-start-2 900:col-end-3 900:row-start-3 900:row-end-4  rounded-20 bg-black bg-opacity-20 shadow-layoutContainer">
          {/* ArtistComponent GoHere */}{' '}
        </div>
        <div className="overflow-hidden col-start-2 col-end-3 row-start-4 rows-end-5 900:col-start-3 900:col-end-4 900:row-start-3 900:row-end-4 rounded-20 gap-x-1 bg-black bg-opacity-20 shadow-layoutContainer">
          {!isLoading && <SliderAlbum item={item} albums={albums} artists={artists} />}
        </div>

        <div className="col-start-1 col-end-3 row-start-5 row-end-6 rounded-20 900:col-start-2 900:col-end-4 900:row-start-4 900:row-end-5 bg-black bg-opacity-20 shadow-layoutContainer">
          {/* MixtapesComponent GoHere */}
        </div>

        <div className="col-start-1 col-end-3 row-start-6 row-end-7 rounded-20 900:col-end-4 900:row-start-5 900:row-end-6 bg-black bg-opacity-20 shadow-layoutContainer mb-4">
          <Contact />
        </div>
        {isSideBarVisible && <SideBar sideBarClass={sideBarClass} albums={albums} setSideBarClass={setSideBarClass} handleSideBar={handleSideBar} />}
      </div>
      {!isLoading && isMobilePlayerVisible ? (
        <PlayerMobile
          onListen={onListen}
          audio={audio}
          currentTrack={currentTrack}
          handleSong={handleSong}
          item={item}
          title={title}
          album={album}
          artist={artist}
          picture={picture}
          setAudio={setAudio}
          setOnListen={setOnListen}
          setCurrentTrack={setCurrentTrack}
          setAlbum={setAlbum}
          setTitle={setTitle}
          setArtist={setArtist}
          setPicture={setPicture}
          setIsPlayerVisible={setIsPlayerVisible}
          setIsMobilePlayerVisible={setIsMobilePlayerVisible}
          isPlaySwitch={isPlaySwitch}
          setIsPlaySwitch={setIsPlaySwitch}
        />
      ) : (
        ''
      )}
      {!isLoading && width > 900 ? (
        <Playbar
          onListen={onListen}
          audio={audio}
          currentTrack={currentTrack}
          handleSong={handleSong}
          item={item}
          title={title}
          album={album}
          artist={artist}
          picture={picture}
          setAudio={setAudio}
          setOnListen={setOnListen}
          setCurrentTrack={setCurrentTrack}
          setAlbum={setAlbum}
          setTitle={setTitle}
          setArtist={setArtist}
          setPicture={setPicture}
          albums={albums}
          setIsMobilePlayerVisible={setIsMobilePlayerVisible}
          isPlaySwitch={isPlaySwitch}
          setIsPlaySwitch={setIsPlaySwitch}
        />
      ) : (
        ''
      )}
      {!isLoading && isPlayerVisible ? (
        <Player
          item={item}
          title={title}
          album={album}
          artist={artist}
          picture={picture}
          setAudio={setAudio}
          setOnListen={setOnListen}
          setCurrentTrack={setCurrentTrack}
          setAlbum={setAlbum}
          setTitle={setTitle}
          setArtist={setArtist}
          setPicture={setPicture}
          audio={audio}
          currentTrack={currentTrack}
          onListen={onListen}
          setIsPlayerVisible={setIsPlayerVisible}
          setIsMobilePlayerVisible={setIsMobilePlayerVisible}
          isPlaySwitch={isPlaySwitch}
          setIsPlaySwitch={setIsPlaySwitch}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
