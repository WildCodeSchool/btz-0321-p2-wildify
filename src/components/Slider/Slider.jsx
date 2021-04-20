import React from 'react';
import PropTypes from 'prop-types';
import UpArrow from '../../img/PlayList/UpArrow.svg';
import DownArrow from '../../img/Icons/DownArrow.svg';

function Slider({ albums, index }) {
  return (
    <div className="h-full w-full" style={{ transform: `translateY(${-11 * index}rem)`, transition: `transform 0.5s ease-in-out` }}>
      {albums.map((album, index) => (
        <div key={index} className="w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${album.picture})` }}>
          <button className="flex focus:outline-none">
            <img className="flex" src={UpArrow} alt="upArrow" />
          </button>
          <div className="text-white pl-1">{album.title}</div>
          <div className=" text-white pl-1">{album.artist}</div>
          <button className="flex focus:outline-none">
            <img src={DownArrow} alt="upArrow" />
          </button>
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
