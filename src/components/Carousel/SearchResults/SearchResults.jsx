import React from 'react';
import PropTypes from 'prop-types';

export default function SearchResults({ item, onSearch }) {
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
              <li className="font-scada text-white text-sm border-b-2 pb-1 mb-5 hover:text-mainColor hover:border-mainColor flex" key={index}>
                <p className="mr-4">{song.title}</p>-<p className="mx-4">{song.artist.name}</p>-<p className="mx-4">{song.album.title}</p>
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
};
