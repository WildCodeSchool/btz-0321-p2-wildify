import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';
import Defaultimg from '../../../img/defaultPicture.png';

export default function Card({ itemReversed, isDragging, setIsRecentAddsActive, setSelectedSong, setIsPlaylist, setMyPlaylist }) {
  const [pointerEvent, setPointerEvent] = useState();
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
  itemReversed.reverse();
  useEffect(() => {
    if (isDragging) {
      setPointerEvent('pointer-events-none');
    } else {
      setPointerEvent('');
    }
  }, [isDragging]);
  return (
    <div className={`${pointerEvent} h-full flex flex-row justify-end`}>
      {itemReversed.map((song, index) => (
        <div
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105"
          style={{
            backgroundImage: `url(${song.album.picture === null ? Defaultimg : song.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="flex w-full bg-black bg-opacity-30 p-2 rounded-b-2xl">
            <div className=" w-full flex flex-col items-start  justify-start ">
              <p className="font-scada leading-5 text-white font-bold text-lg text-left">{song.title}</p>
              <p className="font-scada text-white text-sm text-left">{song.artist.name}</p>
            </div>
            <button value={JSON.stringify(song)} onClick={handleClick2} className="flex focus:outline-none items-end m-1">
              <img className="pointer-events-none" src={PlayerButton} alt="" />
            </button>
            <button value={JSON.stringify(song)} onClick={handleClick} className="text-white">
              XX
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  itemReversed: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setIsRecentAddsActive: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};
