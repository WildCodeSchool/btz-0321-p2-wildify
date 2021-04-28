import React from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';

export default function Card({ itemReversed, setCurrentTrack }) {
  return (
    <div className="h-full flex flex-row justify-end">
      {itemReversed.map((song, index) => (
        <button
          onClick={() => setCurrentTrack(itemReversed.length - 1 - index)}
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105"
          style={{
            backgroundImage: `url(${song.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="flex w-full bg-black bg-opacity-30 p-2 rounded-b-2xl">
            <div className=" w-full flex flex-col items-start  justify-start ">
              <p className="font-scada leading-5 text-white font-bold text-lg text-left">{song.title}</p>
              <p className="font-scada text-white text-sm">{song.artist.name}</p>
            </div>
            <button
              className="flex focus:outline-none items-end m-1"
              type="button"
              onClick={() => setCurrentTrack(itemReversed.length - 1 - index)}
              key={index}>
              <img src={PlayerButton} alt="" />
            </button>
          </div>
        </button>
      ))}
    </div>
  );
}

Card.propTypes = {
  itemReversed: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
