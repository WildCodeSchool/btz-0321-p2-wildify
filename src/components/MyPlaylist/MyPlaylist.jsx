import React from 'react';
import PropTypes from 'prop-types';

import Tracklist from './tracklist';

export default function MyPlaylist({ setIsPlaylist, setCurrentTrack, setMyPlaylist, myPlaylist }) {
  const handleClick = () => {
    localStorage.setItem('myPlaylist', '');
    setMyPlaylist([]);
  };

  return (
    <div className="w-full h-full text-white rounded-20 p-5">
      <div className="flex  w-full justify-between">
        <h1 className="text-white font-scada text-4xl font-bold">MyPlaylist</h1>
        <button
          className="focus:outline-none bg-bgPlaybar bg-opacity-10 shadow-input2 px-5 rounded-xl font-scada text-white hover:text-mainColor transform hover:scale-105 hover:shadow-input"
          onClick={handleClick}>
          Clear
        </button>
      </div>
      {localStorage.getItem('myPlaylist') ? (
        <Tracklist setIsPlaylist={setIsPlaylist} setCurrentTrack={setCurrentTrack} myPlaylist={myPlaylist} />
      ) : (
        <div>
          <h1 className="font-scada font-bold opacity-10 text-2xl text-white mt-5">Select Music to add with the +</h1>
        </div>
      )}
    </div>
  );
}

MyPlaylist.propTypes = {
  myPlaylist: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
