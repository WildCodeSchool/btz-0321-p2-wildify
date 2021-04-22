import React from 'react';
import PropTypes from 'prop-types';

function AlbumTrackList({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default AlbumTrackList;

AlbumTrackList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
