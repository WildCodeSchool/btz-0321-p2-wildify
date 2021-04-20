import React from 'react';
import PropTypes from 'prop-types';

function Slider({ albums, index }) {
  return (
    <div className="h-full w-full" style={{ transform: `translateY(${-18.75 * index}rem)`, transition: `transform 0.5s ease-in-out` }}>
      {albums.map((album, index) => (
        <div key={index} className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl" style={{ backgroundImage: `url(${album.picture})` }}>
          <div className="text-white pl-1">{album.title}</div>
          <div className=" text-white pl-1">{album.artist}</div>
        </div>
      ))}
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.any,
};
