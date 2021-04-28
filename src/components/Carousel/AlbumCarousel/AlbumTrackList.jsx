import React from 'react';
import PropTypes from 'prop-types';
import Backward from '../../../img/BackwardArrow.svg';

function AlbumTrackList({ handleAlbumClick, item, albumChoice, setSelectedSong }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
  };
  return (
    <div className="h-full w-full">
      <button onClick={handleAlbumClick}>
        <img src={Backward} alt="BackwardArrow" />
      </button>
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return (
              <button key={index} value={song.title} onClick={handleClick} className={`font-cuprum text-base font-regular text-white`}>
                {song.title}
              </button>
            );
          })}
      </ul>
    </div>
  );
}

export default AlbumTrackList;

AlbumTrackList.propTypes = {
  handleAlbumClick: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
