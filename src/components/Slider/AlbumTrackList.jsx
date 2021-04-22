import React from 'react';
import PropTypes from 'prop-types';
import Backward from '../../img/BackwardArrow.svg';

function AlbumTrackList({ handleClick, item, albumChoice }) {
  return (
    <div>
      <button onClick={handleClick}>
        <img src={Backward} alt="BackwardArrow" />
      </button>
      <ul>
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return <li key={index}>{song.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default AlbumTrackList;

AlbumTrackList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
};
