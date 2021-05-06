import React from 'react';
import PropTypes from 'prop-types';
export default function AdminSidebar({ showAdminSongs, showAdminPlayList }) {
  return (
    <div className="w-10/12 mt-8 flex h-full mr-10 text-white">
      <ul className=" flex justify-between">
        <button
          onClick={showAdminSongs}
          className="h-8 px-8 mt-5 w-full  mr-4 md:font-scada text-white rounded-lg  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:text-mainColor">
          Songs
        </button>
        <button
          onClick={showAdminPlayList}
          className="h-8 px-8 mt-5 w-full  mr-4 md:font-scada text-white rounded-lg  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:text-mainColor">
          Playlists
        </button>
      </ul>
    </div>
  );
}
AdminSidebar.propTypes = {
  showAdminSongs: PropTypes.func.isRequired,
  showAdminPlayList: PropTypes.func.isRequired,
};
