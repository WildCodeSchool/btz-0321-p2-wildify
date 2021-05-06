import React from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';

export default function TrackListCard({ items, setIsRecentAddsActive, setIsPlaylist, setSelectedSong, setMyPlaylist }) {
  const handleClick = (e) => {
    let result = localStorage.getItem('myPlaylist') ? JSON.parse(localStorage.getItem('myPlaylist')) : [];
    result.push(JSON.parse(e.target.value));
    setMyPlaylist(result);
    localStorage.setItem('myPlaylist', JSON.stringify(result));
  };
  const handleClick2 = (e) => {
    setIsPlaylist(false);
    setSelectedSong(JSON.parse(e.target.value));
    setIsRecentAddsActive(true);
  };
  return (
    <div className="flex flex-row">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105"
          style={{
            backgroundImage: `url(${item.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="flex w-full bg-black bg-opacity-30 p-2 rounded-b-2xl">
            <div className=" w-full flex flex-col items-start  justify-start ">
              <p className="font-scada leading-5 text-white font-bold text-lg text-left">{item.title}</p>
              <p className="font-scada text-white text-sm">{item.artist.name}</p>
            </div>
            <div className="flex focus:outline-none items-end m-1">
              <button value={JSON.stringify(item)} onClick={handleClick2} className="flex focus:outline-none items-end m-1">
                <img className="pointer-events-none" src={PlayerButton} alt="" />
              </button>

              <button value={JSON.stringify(item)} onClick={handleClick} className="text-white">
                XX
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

TrackListCard.propTypes = {
  items: PropTypes.array.isRequired,
  setIsRecentAddsActive: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
};
