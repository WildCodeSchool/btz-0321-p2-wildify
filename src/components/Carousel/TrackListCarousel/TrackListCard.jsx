import React from 'react';
import PropTypes from 'prop-types';

export default function TrackListCard({ items, setCurrentTrack }) {
  return (
    <div className="flex flex-row">
      {items.map((item, index) => (
        <button
          onClick={() => setCurrentTrack(index)}
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl cursor-pointer flex flex-col"
          style={{
            backgroundImage: `url(${item.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <p>{item.title}</p>
          <p>{item.artist.name}</p>
        </button>
      ))}
    </div>
  );
}

TrackListCard.propTypes = {
  items: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
