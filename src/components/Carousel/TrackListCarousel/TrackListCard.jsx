import React from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';
import Defaultimg from '../../../img/defaultPicture.png';
import AddPl from '../../../img/Icons/AddPl.png';
export default function TrackListCard({ setIsClicked, items, setIsPlaylist, setSelectedSong, setMyPlaylist }) {
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
      setIsClicked(true);
    } else if (e.type === 'mouseup') {
      setIsClicked(false);
    }
  };

  return (
    <div className="flex flex-row justify-end h-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor"
          style={{
            backgroundImage: `url(${item.album.picture === null ? Defaultimg : item.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="flex w-full bg-black bg-opacity-30 p-2 rounded-b-2xl">
            <div className=" w-full flex flex-col items-start  justify-start ">
              <p className="font-scada leading-5 text-white font-bold text-lg text-left">{item.title}</p>
              <p className="font-scada text-white text-sm">{item.artist.name}</p>
              <button
                value={JSON.stringify(item)}
                onClick={handleClick}
                className="focus:outline-none h-6 w-full text-white flex justify-end items-center transform hover:scale-110">
                <div className="pointer-events-none flex items-center w-full h-full ">
                  <img src={AddPl} className="pointer-events-none w-3 h-3" alt="" />
                  <h1 className="pointer-events-none text-mainColor text-xs font-bold m-2">Add To My Playlist</h1>
                </div>
              </button>
            </div>
            <div className="flex focus:outline-none items-end m-1">
              <button
                value={JSON.stringify(item)}
                onMouseUp={handleClick2}
                onMouseDown={handleClick2}
                className="flex focus:outline-none items-end m-1 transform hover:scale-110">
                <img className="pointer-events-none" src={PlayerButton} alt="" />
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
  setIsPlaylist: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};
