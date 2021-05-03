import React from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../img/defaultPicture.png';

function ListPlaylist({ setIsChange, playLists }) {
  return (
    <div className="w-full h-full  p-4 900:p-6">
      <h1 className="text-white font-scada text-3xl font-bold">WizicPlaylist</h1>
      {playLists.map((playlist, key) => (
        <button
          onClick={setIsChange}
          key={key}
          type="button"
          className="rounded-3xl w-full flex 900:mt-5 mt-4 items-center p-2 bg-black bg-opacity-20 shadow-searchbar focus:outline-none cursor-pointer hover:border-mainColor hover:text-mainColor transform hover:scale-105">
          <div
            className="w-12 h-12 border-2 border-green-300 rounded-fullist rounded-3xl"
            style={{
              backgroundImage: `url(${playlist.picture === null ? Defaultimg : playlist.picture})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}></div>
          <div className="flex-col ml-3 text-left">
            <h3 className="text-white font-scada font-medium ">{playlist.title}</h3>
            <p className="text-white font-cuprum text-xs font-thin">{playlist.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ListPlaylist;

ListPlaylist.propTypes = {
  setIsChange: PropTypes.func.isRequired,
  playLists: PropTypes.array.isRequired,
};
