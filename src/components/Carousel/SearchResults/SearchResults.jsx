import React from 'react';
import PropTypes from 'prop-types';

export default function SearchResults({ item, onSearch }) {
  return (
    <div className="w-full h-full">
      <ul>
        {item
          .filter((song) => song.title.toLowerCase().includes(onSearch))
          .map((song, index) => {
            return <li key={index}>{song.title}</li>;
          })}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  item: PropTypes.array.isRequired,
  onSearch: PropTypes.string.isRequired,
};
