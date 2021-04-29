import React, { useContext, useState, useEffect } from 'react';
import AdminPlaylist from './AdminPlayList/AdminPlaylist';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import AdminSongs from './AdminSongs/AdminSongs';
import authContext from '../../context/authContext';

export default function AdminPannel({ item, artists, albums }) {
  const [isAdminSong, setIsAdminSong] = useState(false);
  const [isAdminUsers, setIsAdminUsers] = useState(false);
  const [isAdminSettings, setIsAdminSettings] = useState(false);
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
    await playListFetch();
  }, []);

  const showAdminPlayList = () => {
    setIsAdminSong(false);
    setIsAdminPlayList(true);
    setIsAdminSettings(false);
    setIsAdminUsers(false);
    console.log(isAdminPlayList, isAdminSettings, isAdminUsers, isAdminSong);
  };
  const showAdminUsers = () => {
    setIsAdminSong(false);
    setIsAdminPlayList(false);
    setIsAdminSettings(false);
    setIsAdminUsers(true);

    console.log(isAdminPlayList, isAdminSettings, isAdminUsers, isAdminSong);
  };

  const showAdminSettings = () => {
    setIsAdminSong(false);
    setIsAdminPlayList(false);
    setIsAdminSettings(true);
    setIsAdminUsers(false);
    console.log(isAdminPlayList, isAdminSettings, isAdminUsers, isAdminSong);
  };

  const showAdminSongs = () => {
    setIsAdminSong(true);
    setIsAdminPlayList(false);
    setIsAdminSettings(false);
    setIsAdminUsers(false);
    console.log(isAdminPlayList, isAdminSettings, isAdminUsers, isAdminSong);
  };

  return (
    <div className=" w-full h-screen z-50 fixed bg-gray-700 ">
      <div className="h-44 w-full text-5xl text-gray-500 flex items-center align-middle justify-center flex flex-col items-center align-middle justify-center  border-white border-b-2 ">
        {' '}
        <h1 className="border-white border-2 py-2 px-4 rounded-xl text-white">ADMIN PANNEL</h1>
        <p className="text-white">Take control on what U ear !</p>
      </div>
      <div className="h-4/5 w-full flex  flex-row">
        <AdminSidebar
          showAdminSettings={showAdminSettings}
          showAdminSongs={showAdminSongs}
          showAdminUsers={showAdminUsers}
          showAdminPlayList={showAdminPlayList}
        />
        {isAdminSong && <AdminSongs playList={playList} item={item} artist={artists} albums={albums} />}
        {isAdminPlayList && <AdminPlaylist playListFetch={playListFetch} playList={playList} />}
      </div>
    </div>
  );
}
