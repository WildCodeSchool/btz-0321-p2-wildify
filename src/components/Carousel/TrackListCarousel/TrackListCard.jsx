import React from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';

export default function TrackListCard({ items, setCurrentTrack, setMyPlaylist }) {
  const handleClick = (e) => {
    let myPlaylist = localStorage.getItem('myPlaylist');
    myPlaylist = myPlaylist ? myPlaylist.split(',') : [];
    myPlaylist.push(e.target.value);
    localStorage.setItem('myPlaylist', myPlaylist.toString());
    setMyPlaylist(localStorage.getItem('myPlaylist').split(','));
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
              <button onClick={() => setCurrentTrack(index)}>
                <img src={PlayerButton} alt="" />
              </button>

              <button value={item.title} className="text-white" onClick={handleClick}>
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
  setCurrentTrack: PropTypes.func.isRequired,
};
