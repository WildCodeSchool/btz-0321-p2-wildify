import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../img/defaultPicture.png';

function Slider({ albums, index, width, handleClick }) {
  const [translationSlide, setTranslationSlide] = useState();

  useEffect(() => {
    if (width < 900) {
      setTranslationSlide(-13.75);
    } else {
      setTranslationSlide(-18.75);
    }
  }, [width]);
  return (
    <div
      className="h-full w-full"
      style={{
        transform: `translateY(${translationSlide * index}rem)`,
      }}>
      {albums.map((album, index) => (
        <button
          onClick={handleClick}
          key={index}
          type="button"
          className="flex flex-col w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl transform hover:scale-105"
          style={{ backgroundImage: `url(${album.picture === null ? Defaultimg : album.picture})` }}>
          <div className="text-left flex flex-col justify-between pt-6 pb-8 px-2 900:py-10 900:px-3 h-full w-full bg-black bg-opacity-40 hover:bg-opacity-10">
            <h1 className="font-scada text-mainColor font-bold text-2xl 900:text-3xl">Album</h1>
            <div className="font-scada text-white  font-bold text-2xl 900:text-3xl">{album.title}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
