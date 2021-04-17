import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ picture }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture} alt="ArtistPicture" className="w-full h-full" />
    </div>
  );
}

ArtistCard.propTypes = {
  picture: PropTypes.string.isRequired,
};
