import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ picture, active }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture} alt="ArtistPicture" className={!active ? 'hidden' : 'w-full h-full'} />
    </div>
  );
}

ArtistCard.propTypes = {
  picture: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
