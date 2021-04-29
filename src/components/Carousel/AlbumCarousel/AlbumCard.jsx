import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ albums, handleAlbumClick }) {
  return (
    <div className="flex flex-row">
      {albums.map((album, index) => (
        <button
          value={album.title}
          onClick={handleAlbumClick}
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl cursor-pointer text-center"
          style={{
            backgroundImage: `url(${album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div>{album.title}</div>
        </button>
      ))}
    </div>
  );
}

AlbumCard.propTypes = {
  albums: PropTypes.array.isRequired,
  handleAlbumClick: PropTypes.func.isRequired,
};
