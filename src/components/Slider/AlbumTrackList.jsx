import React from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';

function AlbumTrackList({ handleClick, item, albumChoice, setSelectedSong }) {
  const handleClick2 = (e) => {
    setSelectedSong(JSON.parse(e.target.value));
  };
  return (
    <div className="flex flex-col p-3 h-full w-full">
      <button className="focus:outline-none w-full flex items-center justify-end pt-1 pr-2 font-scada text-white transform" onClick={handleClick}>
        <img className="h-5 w-5" src={ReturnBtn} alt="BackwardArrow" />
      </button>
      <ul className="w-full h-full rounded-3xl bg-blend-lighten text-left">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return (
              <li key={index} className="font-cuprum pb-3 pt-1 900:px-3  text-white">
                <button
                  value={JSON.stringify(song)}
                  className="focus:outline-none text-left pb-1 border-b w-full hover:border-mainColor hover:text-mainColor transform hover:scale-105"
                  onClick={handleClick2}
                  type="button">
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
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
