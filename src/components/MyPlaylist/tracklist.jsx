import React from 'react';
import PropTypes from 'prop-types';

function Tracklist({ setIsPlaylist, setCurrentTrack, myPlaylist }) {
  const handleClick2 = (e) => {
    setIsPlaylist(true);
    setCurrentTrack(parseInt(e.target.value));
  };

  return (
    <div>
      <ul className="mt-4 h-52 text-white overflow-y-auto flex flex-col">
        {myPlaylist &&
          myPlaylist.map((song, index) => {
            return (
              <button
                onClick={handleClick2}
                className="border-b mt-3 pb-1 w-full hover:text-green-500 hover:border-mainColor text-left border-white"
                value={index}
                key={index}>
                <div className="pointer-events-none flex items-center">
                  <img src={song.album.picture} className="w-8 h-8 mr-3 rounded-full" alt="" />
                  <h1 className="pointer-events-none font-scada mr-2 font-bold">{song.title}</h1> -{' '}
                  <h1 className="pointer-events-none ml-2 text-xs">{song.artist.name}</h1>
                </div>
              </button>
            );
          })}
      </ul>
    </div>
  );
}

export default Tracklist;

Tracklist.propTypes = {
  myPlaylist: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
