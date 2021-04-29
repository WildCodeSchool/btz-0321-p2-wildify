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
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105"
          style={{
            backgroundImage: `url(${album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="w-full flex  items-start  justify-start bg-black bg-opacity-30 p-4 rounded-b-xl">
            <p className="text-left font-scada text-white text-xl">{album.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

AlbumCard.propTypes = {
  albums: PropTypes.array.isRequired,
  handleAlbumClick: PropTypes.func.isRequired,
};
