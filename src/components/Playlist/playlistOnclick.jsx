import React from 'react';
import PropTypes from 'prop-types';

function PlaylistOnclick({ title, Artist, album }) {
  return (
    <div className="bg p-1">
      <div className="flex  items-center mt-4 border-b border-gra border-white pb-1">
        <div className="text-white font-scada font-medium mr-2">{title}</div>
        <div className="text-white font-scada text-xsm mr-2">{Artist}</div>
        <div className="text-white font-scada text-xs">{album}</div>
      </div>
    </div>
  );
}

export default PlaylistOnclick;

PlaylistOnclick.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  Artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};
