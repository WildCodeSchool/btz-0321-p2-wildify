import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ artists, handleArtistClick }) {
  return (
    <div className="flex flex-row">
      {artists.map((artist, index) => (
        <button
          onClick={handleArtistClick}
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105"
          style={{
            backgroundImage: `url(./src/img/defaultAlbumImage.png)`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className=" w-full flex  items-start  justify-start bg-black bg-opacity-30 p-4 rounded-b-2xl">
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
};
