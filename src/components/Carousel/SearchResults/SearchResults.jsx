import React from 'react';
import PropTypes from 'prop-types';

export default function SearchResults({ item, onSearch, setSelectedSong }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
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
                <button value={song.title} onClick={handleClick} className="flex">
                  <p className="mr-4 pointer-events-none font-bold">{song.title}</p>-
                  <p className="mx-4 pointer-events-none text-sm">{song.artist.name}</p>-
                  <p className="mx-4 pointer-events-none text-sm">{song.album.title}</p>
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
