import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ albums }) {
  return (
    <div className="flex flex-row">
      {albums.map((album, index) => (
        <div
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl cursor-pointer"
          style={{
            backgroundImage: `url(${album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          {console.log(album.picture)}
        </div>
      ))}
    </div>
  );
}

AlbumCard.propTypes = {
  albums: PropTypes.array.isRequired,
};
