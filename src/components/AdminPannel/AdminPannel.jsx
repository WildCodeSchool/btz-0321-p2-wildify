import React, { useContext, useState, useEffect } from 'react';
import AdminPlaylist from './AdminPlayList/AdminPlaylist';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import AdminSongs from './AdminSongs/AdminSongs';
import authContext from '../../context/authContext';
import PropTypes from 'prop-types';
import LogginPannel from './LogginPage/LogginPage';
import BackGround from '../../img/BackGrounds/PanelBG.png';

export default function AdminPannel({ item, albums, hideAdmin, artists }) {
  const [isAdminSong, setIsAdminSong] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdminPlayList, setIsAdminPlayList] = useState(false);
  const { token } = useContext(authContext);
  const [myPlayList, setMyPlayList] = useState();

  const playListFetch = () =>
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((result) => {
        setMyPlayList(result);
      })
      .catch((error) => {
        error;
      });

  useEffect(async () => {
    await playListFetch();
  }, []);

  const showAdminPlayList = () => {
    setIsAdminSong(false);
    setIsAdminPlayList(true);
  };

  const showAdminSongs = () => {
    setIsAdminSong(true);
    setIsAdminPlayList(false);
  };

  const handleLoggin = () => {
    if (isLogged) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  };

  return (
    <div
      className="w-screen h-screen z-50 fixed overflow-y-auto"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
      }}>
      <div className="flex">
        <div className="w-full text-5xl text-gray-500 flex flex-col justify-center">
          {' '}
          <h1 className="rounded-xl text-white">ADMIN PANNEL</h1>
          <p className="text-white">Take control on what you ear !</p>
        </div>
        <button onClick={hideAdmin} className="focus:outline-none text-white border-white rounded-xl  whitespace-nowrap">
          Back To WIZIC
        </button>
      </div>
      <div className="">
        <AdminSidebar showAdminSongs={showAdminSongs} showAdminPlayList={showAdminPlayList} />
        <div className="w-full flex flex-col justify-center items-center align-middle h-full ">
          {!isLogged && <LogginPannel handleLoggin={handleLoggin} />}
          {isAdminSong && <AdminSongs artists={artists} albums={albums} myPlayList={myPlayList} item={item} />}
          {isAdminPlayList && <AdminPlaylist playListFetch={playListFetch} myPlayList={myPlayList} item={item} />}
        </div>
      </div>
    </div>
  );
}

AdminPannel.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  hideAdmin: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
};
