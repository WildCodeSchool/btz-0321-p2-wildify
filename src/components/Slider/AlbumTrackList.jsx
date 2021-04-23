import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Backward from '../../img/BackwardArrow.svg';

function AlbumTrackList({ handleClick, item, albumChoice, width, setSelectedSong }) {
  const [translationTrack, setTranslationTrack] = useState();

  useEffect(() => {
    if (width < 900) {
      setTranslationTrack('translate-y-6');
    } else {
      setTranslationTrack('-translate-y-4');
    }
  }, []);

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
              <li
                key={index}
                className={`font-cuprum text-base font-regular border-opacity-25 shadow-2xl transform  text-white pl-14 ${translationTrack}`}>
                <button onClick={() => setSelectedSong(item.filter((track) => track.title.includes(song.title)))} type="button">
                  {song.title}
                </button>
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
  albums: PropTypes.array.isRequired,
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
