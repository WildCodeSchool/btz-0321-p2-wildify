import React, { useState } from 'react';
import AdminPlaylist from './AdminPlayList/AdminPlaylist';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import AdminSongs from './AdminSongs/AdminSongs';

export default function AdminPannel({ item, artists, albums }) {
  const [isAdminSong, setIsAdminSong] = useState(false);
  const [isAdminUsers, setIsAdminUsers] = useState(false);
  const [isAdminSettings, setIsAdminSettings] = useState(false);
  const [isAdminPlayList, setIsAdminPlayList] = useState(false);

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
    <div className=" w-full h-screen z-50 fixed bg-adminBG">
      <div className="h-44 w-full text-5xl text-gray-500 flex items-center align-middle justify-center  ">
        {' '}
        <h1 className="border-white border-b-2">Admin Pannel</h1>{' '}
      </div>
      <div className="h-4/5 w-full flex  flex-row">
        <AdminSidebar
          showAdminSettings={showAdminSettings}
          showAdminSongs={showAdminSongs}
          showAdminUsers={showAdminUsers}
          showAdminPlayList={showAdminPlayList}
        />
        {isAdminSong && <AdminSongs item={item} artist={artists} albums={albums} />}
        {isAdminPlayList && <AdminPlaylist />}
      </div>
    </div>
  );
}
