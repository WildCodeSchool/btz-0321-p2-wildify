import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ picture }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture} alt="AlbumPicture" className="w-full h-full" />
    </div>
  );
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
};
