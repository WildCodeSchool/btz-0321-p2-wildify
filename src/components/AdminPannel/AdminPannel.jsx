import React, { useContext, useState, useEffect } from 'react';
import AdminPlaylist from './AdminPlayList/AdminPlaylist';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import AdminSongs from './AdminSongs/AdminSongs';
import authContext from '../../context/authContext';
import PropTypes from 'prop-types';
import LogginPannel from './LogginPage/LogginPage';

export default function AdminPannel({ item, albums, hideAdmin, artists }) {
  const [isAdminSong, setIsAdminSong] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdminPlayList, setIsAdminPlayList] = useState(false);
  const { token } = useContext(authContext);
  const [playList, setPlayList] = useState();

  const playListFetch = () =>
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((result) => {
        setPlayList(result);
      })
      .catch((error) => {
        error;
      });

  useEffect(async () => {
    playListFetch();
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
    <div className=" w-full h-screen z-50 fixed bg-gray-700 ">
      <button onClick={hideAdmin} className="border-2 text-white border-white rounded-xl py-2 px-4  whitespace-nowrap  ">
        RETURN TO WIZIC
      </button>
      <div className="h-44 w-full text-5xl text-gray-500 flex flex-col items-center align-middle justify-center  border-white border-b-2 ">
        {' '}
        <h1 className="border-white border-2 py-2 px-4 rounded-xl text-white">ADMIN PANNEL</h1>
        <p className="text-white">Take control on what U ear !</p>
      </div>
      <div className="h-4/5 w-full flex  flex-row">
        <AdminSidebar showAdminSongs={showAdminSongs} showAdminPlayList={showAdminPlayList} />
        <div className="w-full flex flex-col justify-center items-center align-middle h-full">
          {!isLogged && <LogginPannel handleLoggin={handleLoggin} />}
          {isAdminSong && <AdminSongs artists={artists} albums={albums} playList={playList} item={item} />}
          {isAdminPlayList && <AdminPlaylist playListFetch={playListFetch} playList={playList} item={item} />}
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
