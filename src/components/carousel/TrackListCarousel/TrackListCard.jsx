import React from 'react';
import PropTypes from 'prop-types';

export default function TrackListCard({ picture }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture === null ? 'src/img/defaultPicture.png' : picture} alt="TrackListPicture" className="w-full h-full" />
    </div>
  );
}

TrackListCard.propTypes = {
  picture: PropTypes.any.isRequired,
};
