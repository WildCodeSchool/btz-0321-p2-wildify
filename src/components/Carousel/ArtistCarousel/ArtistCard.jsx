import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ artists, handleArtistClick }) {
  return (
    <div className="flex flex-row">
      {artists.map((artist, index) => (
        <button
          onClick={handleArtistClick}
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl cursor-pointer text-center text-white"
          style={{
            backgroundImage: `url(./src/img/defaultAlbumImage.png)`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          {artist.name}
        </button>
      ))}
    </div>
  );
}

ArtistCard.propTypes = {
  handleArtistClick: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
};
