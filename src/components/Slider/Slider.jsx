import React from 'react';
import PropTypes from 'prop-types';

function Slider({ albums, index }) {
  return (
    <div className="" style={{ transform: `translateY(${-11 * index}rem)`, transition: `transform 0.5s ease-in-out` }}>
      {albums.map((album, index) => (
        <div key={index} className="h-44 w-44" style={{ backgroundImage: `url(${album.picture})`, backgroundSize: `11rem` }}>
          <div className="text-white pl-1">{album.title}</div>
          <div className="text-white pl-1">{album.artist}</div>
        </div>
      ))}
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};
