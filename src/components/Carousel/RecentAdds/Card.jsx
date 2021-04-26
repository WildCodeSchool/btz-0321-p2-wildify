import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ itemReversed, setCurrentTrack }) {
  return (
    <div className="flex flex-row">
      {itemReversed.map((song, index) => (
        <button
          onClick={() => setCurrentTrack(itemReversed.length - 1 - index)}
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl cursor-pointer"
          style={{
            backgroundImage: `url(${song.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}></button>
      ))}
    </div>
  );
}

Card.propTypes = {
  items: PropTypes.array.isRequired,
  itemReversed: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
