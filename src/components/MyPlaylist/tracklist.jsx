import React from 'react';
import PropTypes from 'prop-types';
import './scrollbarwebkit.css';
import Defaultimg from '../../img/defaultPicture.png';
function Tracklist({ setIsPlaylist, setCurrentTrack, myPlaylist }) {
  const handleClick2 = (e) => {
    setIsPlaylist(true);
    setCurrentTrack(parseInt(e.target.value));
  };

  return (
    <div>
      <ul className="mt-4 h-52 sidebar text-white overflow-y-auto flex flex-col">
        {myPlaylist &&
          myPlaylist.map((song, index) => {
            return (
              <button
                onClick={handleClick2}
                className="border-b mt-3 pb-1 w-full focus:outline-none hover:text-green-500 hover:border-mainColor text-left border-white"
                value={index}
                key={index}>
                <div className="w-full pointer-events-none flex items-center">
                  <div
                    className="pointer-events-none flex h-9 w-9 mr-4 rounded-full"
                    style={{
                      backgroundImage: `url(${song.artist.picture === null ? Defaultimg : song.artist.picture})`,
                      backgroundSize: `cover`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center`,
                    }}></div>
                  <div className="flex flex-col">
                    <h1 className="pointer-events-none font-scada mr-2 font-bold">{song.title}</h1>
                    <h1 className="pointer-events-none text-xs">{song.artist.name}</h1>
                  </div>
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
  setIsPlaylist: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
