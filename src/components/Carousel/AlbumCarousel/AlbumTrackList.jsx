import React from 'react';
import PropTypes from 'prop-types';
import Backward from '../../../img/BackwardArrow.svg';

function AlbumTrackList({ handleClick, item, albumChoice, setSelectedSong, setCurrentTrack }) {
  console.log(item);
  console.log(setCurrentTrack);

  const handleClick2 = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    console.log(mySong);
    setSelectedSong(mySong);
    // console.log(item.indexOf(item.filter((song) => song.title.includes(mySong[0].title))[0].title));
    // console.log(item.filter((song) => song.title.includes(mySong[0].title))[0].title);
  };
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
              <button key={index} value={song.title} onClick={handleClick2} className={`font-cuprum text-base font-regular text-white`}>
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
  handleClick: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
};
