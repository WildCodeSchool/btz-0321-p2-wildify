import React from 'react';
import PropTypes from 'prop-types';

export default function TrackListCard({ picture, active }) {
  return (
    <div className="w-6/12 h-4/6">
      <img src={picture} alt="TrackListPicture" className={!active ? 'hidden' : 'w-full h-full'} />
    </div>
  );
}

TrackListCard.propTypes = {
  picture: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
};
