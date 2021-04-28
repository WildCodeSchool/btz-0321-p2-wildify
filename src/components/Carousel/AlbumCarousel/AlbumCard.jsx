import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ albums, handleClick }) {
  return (
    <div className="flex flex-row">
      {albums.map((album, index) => (
        <button
          value={index}
          onClick={handleClick}
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl cursor-pointer text-center"
          style={{
            backgroundImage: `url(${album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          {album.title}
        </button>
      ))}
    </div>
  );
}

AlbumCard.propTypes = {
  albums: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
