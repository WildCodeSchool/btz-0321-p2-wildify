import React from 'react';
import PropTypes from 'prop-types';
import '../Carousel/scrollbarwebkit.css';

export default function MyPlaylist({ setIsPlaylist, setCurrentTrack, setMyPlaylist, myPlaylist }) {
  const handleClick = () => {
    localStorage.setItem('myPlaylist', '');
    setMyPlaylist([]);
  };

  const handleClick2 = (e) => {
    setIsPlaylist(true);
    setCurrentTrack(parseInt(e.target.value));
  };

  return (
    <div className="w-full h-full text-white bg-black bg-opacity-50 overflow-y-auto sidebar   rounded-20 p-4 ">
      <h1 className="text-white">My Playlist : </h1>
      <button className="text-white" onClick={handleClick}>
        CLEAR PLAYLIST
      </button>
      <ul className="w-full h-full text-white overflow-y-auto flex flex-col">
        {myPlaylist &&
          myPlaylist.map((song, index) => {
            return (
              <button onClick={handleClick2} className="border-b-2 w-full hover:text-green-500 text-left border-white" value={index} key={index}>
                {song.title}
              </button>
            );
          })}
      </ul>
    </div>
  );
}

MyPlaylist.propTypes = {
  myPlaylist: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
