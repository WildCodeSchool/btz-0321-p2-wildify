import React from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';
import Defaultimg from '../../../img/defaultPicture.png';
import AddPl from '../../../img/Icons/AddPl.png';

export default function Card({ itemReversed, setIsClicked, setIsRecentAddsActive, setSelectedSong, setIsPlaylist, setMyPlaylist }) {
  const handleClick = (e) => {
    let result = localStorage.getItem('myPlaylist') ? JSON.parse(localStorage.getItem('myPlaylist')) : [];
    result.push(JSON.parse(e.target.value));
    setMyPlaylist(result);
    localStorage.setItem('myPlaylist', JSON.stringify(result));
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    if (e.type === 'mousedown') {
      setIsPlaylist(false);
      setSelectedSong(JSON.parse(e.target.value));
      setIsRecentAddsActive(true);
      setIsClicked(true);
    } else if (e.type === 'mouseup') {
      setIsClicked(false);
    }
  };

  return (
    <div className="h-full flex flex-row justify-end">
      {itemReversed.map((song, index) => (
        <div
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor "
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
              <button
                value={JSON.stringify(song)}
                onClick={handleClick}
                className="focus:outline-none h-6 w-full text-white flex justify-end items-center transform hover:scale-110">
                <div className="pointer-events-none flex items-center w-full h-full ">
                  <img src={AddPl} className="pointer-events-none w-3 h-3" alt="" />
                  <h1 className="pointer-events-none text-mainColor text-xs font-bold m-2">Add To My Playlist</h1>
                </div>
              </button>
            </div>
            <div className="flex">
              <button
                value={JSON.stringify(song)}
                onMouseUp={handleClick2}
                onMouseDown={handleClick2}
                className="flex items-center w-full focus:outline-none m-1 transform hover:scale-110">
                <img className="pointer-events-none" src={PlayerButton} alt="" />
              </button>
            </div>
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
  setIsClicked: PropTypes.func.isRequired,
};
