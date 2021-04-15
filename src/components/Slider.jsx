import React from 'react';
import PropTypes from 'prop-types';

function Slider({ songs, index }) {
  return (
    <div className="" style={{ transform: `translateY(${-11 * index}rem)`, transition: `transform 0.5s ease-in-out` }}>
      {songs.map((song, index) => (
        <div key={index} className="h-44 w-44" style={{ backgroundImage: `url(${song.album.picture})`, backgroundSize: `11rem` }}>
          <div className="text-white pl-1">{song.album.title}</div>
          <div className="text-white pl-1">{song.title}</div>
          <div className="text-white pl-1">{song.artist.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  songs: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};
