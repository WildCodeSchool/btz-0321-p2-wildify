import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../../img/defaultPicture.png';

export default function ArtistCard({ artists, handleArtistClick, isDragging }) {
  const [pointerEvent, setPointerEvent] = useState();
  useEffect(() => {
    if (isDragging) {
      setPointerEvent('pointer-events-none');
    } else {
      setPointerEvent('');
    }
  }, [isDragging]);
  return (
    <div className="flex flex-row">
      {artists.map((artist, index) => (
        <button
          type="button"
          value={artist.name}
          onClick={handleArtistClick}
          key={index}
          className={`${pointerEvent} flex justify-end w-56 h-72 my-3 mx-3 rounded-xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105`}
          style={{
            backgroundImage: `url(${artist.picture === null ? Defaultimg : artist.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="w-full  flex  items-start  justify-start bg-black bg-opacity-30 p-4 rounded-b-xl">
            <p className="font-scada text-white text-xl">{artist.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

ArtistCard.propTypes = {
  handleArtistClick: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
  isDragging: PropTypes.bool.isRequired,
};
