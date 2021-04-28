import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
          className="flex flex-col w-full h-full  bg-center bg-no-repeat bg-cover rounded-3xl transform hover:scale-105  "
          style={{ backgroundImage: `url(${album.picture})` }}>
          <div className="flex flex-col justify-end w-full h-full">
            <div className="text-left flex flex-col justify-between pl-2 pt-8 900:py-12 900:px-3 h-full w-full bg-black bg-opacity-30 hover:bg-opacity-10">
              <div className="font-scada text-white font-bold text-2xl 900:text-3xl">{album.title}</div>
            </div>
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
