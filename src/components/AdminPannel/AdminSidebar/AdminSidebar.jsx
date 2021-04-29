import React from 'react';

export default function AdminSidebar({ showAdminSongs, showAdminPlayList, showAdminUsers, showAdminSettings }) {
  return (
    <div className="w-44 h-full justify-center text-white border-r-2 border-white">
      <ul>
        <li
          onClick={showAdminSongs}
          className="py-2 px-4 hover:opacity-50 active:bg-black flex justify-center align-middle items-center border-white   cursor-pointer">
          Songs
        </li>
        <li
          onClick={showAdminPlayList}
          className="py-2 px-4 hover:opacity-50 active:bg-black  flex justify-center align-middle items-center border-white  border-t-2 cursor-pointer">
          Playlists
        </li>
        <li
          onClick={showAdminUsers}
          className="py-2 px-4 active:bg-black hover:opacity-50 flex justify-center align-middle items-center border-white  border-t-2 cursor-pointer">
          Users
        </li>
        <li
          onClick={showAdminSettings}
          className="py-2 px-4  flex justify-center hover:opacity-50 active:bg-black align-middle items-center border-white border-b-2 border-t-2 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
}
