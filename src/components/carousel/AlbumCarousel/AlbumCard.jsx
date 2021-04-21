import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ picture }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture === null ? 'src/img/defaultPicture.png' : picture} alt="AlbumPicture" className="w-full h-full" />
    </div>
  );
}

AlbumCard.propTypes = {
  picture: PropTypes.string.isRequired,
};
