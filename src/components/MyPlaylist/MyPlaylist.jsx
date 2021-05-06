import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Carousel/scrollbarwebkit.css';
import Tracklist from './tracklist';

export default function MyPlaylist({ setIsPlaylist, setCurrentTrack, setMyPlaylist, myPlaylist }) {
  const [isactive, setIsActive] = useState(true);

  const handleClick = () => {
    localStorage.setItem('myPlaylist', '');
    setMyPlaylist([]);
    setIsActive(false);
  };

  return (
    <div className="w-full h-full text-white  sidebar rounded-20 p-5">
      <div className="flex  w-full justify-between">
        <h1 className="text-white font-scada text-4xl font-bold">MyPlaylist</h1>
        <button
          className="focus:outline-none bg-bgPlaybar bg-opacity-10 shadow-input2 px-5 rounded-xl font-scada text-white hover:text-mainColor transform hover:scale-105 hover:shadow-input"
          onClick={handleClick}>
          Clear
        </button>
      </div>
      {isactive ? (
        <Tracklist setIsPlaylist={setIsPlaylist} setCurrentTrac={setCurrentTrack} myPlaylist={myPlaylist} />
      ) : (
        <div>
          <h1>Helloworld</h1>
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
