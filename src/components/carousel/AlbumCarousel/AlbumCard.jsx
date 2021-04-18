import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ picture, active }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture} alt="AlbumPicture" className={!active ? 'hidden' : 'w-full h-full'} />
    </div>
  );
}

AlbumCard.propTypes = {
  picture: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
