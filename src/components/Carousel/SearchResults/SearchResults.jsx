import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchResults({ item, onSearch, setSelectedSong }) {
  const [isNoResult, setIsNoResult] = useState(false);
  const handleClick = (e) => {
    setSelectedSong(JSON.parse(e.target.value));
  };
  useEffect(() => {
    if (
      item.filter(
        (song) =>
          song.title.toLowerCase().includes(onSearch) ||
          song.artist.name.toLowerCase().includes(onSearch) ||
          song.album.title.toLowerCase().includes(onSearch),
      ).length === 0
    ) {
      setIsNoResult(true);
    } else {
      setIsNoResult(false);
    }
  }, [onSearch]);

  return (
    <div className="w-full h-full  py-2 pl-2 pr-4 900:px-8">
      <ul>
        {isNoResult ? (
          <h1 className="font-scada mr-2 font-bold opacity-10 text-4xl text-white">No Result...</h1>
        ) : (
          item
            .filter(
              (song) =>
                song.title.toLowerCase().includes(onSearch) ||
                song.artist.name.toLowerCase().includes(onSearch) ||
                song.album.title.toLowerCase().includes(onSearch),
            )
            .map((song, index) => {
              return (
                <li className="font-scada  text-white border-b-2 pb-1 mb-5 hover:text-mainColor hover:border-mainColor" key={index}>
                  <button value={JSON.stringify(song)} onClick={handleClick} className="flex">
                    <div className="pointer-events-none flex items-center">
                      <img src={song.album.picture} className="w-8 h-8 mr-3 rounded-full" alt="" />
                      <h1 className="font-scada mr-2 font-bold">{song.title}</h1> - <h1 className="ml-2 text-xs">{song.artist.name}</h1> -{' '}
                      <h1 className="ml-2 text-xs">{song.album.title}</h1>
                    </div>
                  </button>
                </li>
              );
            })
        )}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  item: PropTypes.array.isRequired,
  onSearch: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
