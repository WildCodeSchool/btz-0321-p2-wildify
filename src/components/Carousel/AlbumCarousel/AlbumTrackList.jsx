import React from 'react';
import PropTypes from 'prop-types';
import Backward from '../../../img/BackwardArrow.svg';

function AlbumTrackList({ handleClick, item, albumChoice }) {
  return (
    <div className="h-full w-full">
      <button onClick={handleClick}>
        <img src={Backward} alt="BackwardArrow" />
      </button>
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return (
              <li key={index} className={`font-cuprum text-base font-regular text-white`}>
                {song.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default AlbumTrackList;

AlbumTrackList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
};
