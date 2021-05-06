import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wave from '../../../img/wavegreen.gif';

export default function SearchResults({ item, onSearch, setSelectedSong }) {
  const [displayNone, setDisplayNone] = useState('none');
  const [songTitle, setSongTitle] = useState();
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
    setDisplayNone('flex');
    setSongTitle(e.target.value);
  };
  return (
    <div className="w-full h-full py-2 pl-2 pr-4 900:px-8">
      <ul>
        {item
          .filter(
            (song) =>
              song.title.toLowerCase().includes(onSearch) ||
              song.artist.name.toLowerCase().includes(onSearch) ||
              song.album.title.toLowerCase().includes(onSearch),
          )
          .map((song, index) => {
            return (
              <li className="font-scada text-white border-b-2 pb-1 mb-5 hover:text-mainColor hover:border-mainColor" key={index}>
                <button value={song.title} onClick={handleClick} className="flex items-center">
                  <p className="mr-4 pointer-events-none font-bold">{song.title}</p>-
                  <p className="mx-4 pointer-events-none text-sm">{song.artist.name}</p>-
                  <p className="mx-4 pointer-events-none text-sm">{song.album.title}</p>
                  {songTitle === song.title ? <img className="h-12 w-12 opacity-50" style={{ display: `${displayNone}` }} src={Wave} alt="" /> : ''}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  item: PropTypes.array.isRequired,
  onSearch: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
