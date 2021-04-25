import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ artists }) {
  return (
    <div className="flex flex-row">
      {artists.map((artist, index) => (
        <div
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl"
          style={{
            backgroundImage: `url(./src/img/defaultAlbumImage.png)`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}></div>
      ))}
    </div>
  );
}

ArtistCard.propTypes = {
  artists: PropTypes.array.isRequired,
};
