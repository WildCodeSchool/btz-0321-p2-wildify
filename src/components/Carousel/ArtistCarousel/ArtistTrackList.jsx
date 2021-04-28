import React from 'react';
import PropTypes from 'prop-types';
import Backward from '../../../img/BackwardArrow.svg';

function ArtistTrackList({ handleArtistClick, item, artistChoice, setSelectedSong }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
  };
  return (
    <div className="h-full w-full">
      <button onClick={handleArtistClick}>
        <img src={Backward} alt="BackwardArrow" />
      </button>
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.artist.name.includes(artistChoice))
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

export default ArtistTrackList;

ArtistTrackList.propTypes = {
  handleArtistClick: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  artistChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
