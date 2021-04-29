import React from 'react';
import PropTypes from 'prop-types';

function AlbumTrackList({ item, albumChoice, setSelectedSong }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
  };
  return (
    <div className="h-full w-full">
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
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
