import React from 'react';
import PropTypes from 'prop-types';
export default function AdminSidebar({ showAdminSongs, showAdminPlayList }) {
  return (
    <div className="w-44 flex h-full justify-center text-white">
      <ul className="flex">
        <button
          onClick={showAdminSongs}
          className="py-2 px-4 w-full hover:opacity-50 active:bg-black flex justify-center align-middle items-center cursor-pointer">
          Songs
        </button>
        <button
          onClick={showAdminPlayList}
          className="py-2 px-4 w-full  hover:opacity-50 active:bg-black  flex justify-center align-middle items-center cursor-pointer">
          Playlists
        </button>
        <button className="py-2 w-full  px-4 active:bg-black hover:opacity-50 flex justify-center align-middle items-center cursor-pointer">
          Users
        </button>
        <button className="py-2 px-4 w-full flex justify-center hover:opacity-50 active:bg-black align-middle items-center cursor-pointer">
          Settings
        </button>
      </ul>
    </div>
  );
}
AdminSidebar.propTypes = {
  showAdminSongs: PropTypes.func.isRequired,
  showAdminPlayList: PropTypes.func.isRequired,
};
