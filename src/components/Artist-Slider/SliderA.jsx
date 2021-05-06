import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../img/defaultPicture.png';
function SliderA({ artists, index, width, handleClick }) {
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
      className="h-full  w-full"
      style={{
        transform: `translateY(${translationSlide * index}rem)`,
      }}>
      {artists.map((artist, index) => (
        <button
          onClick={handleClick}
          key={index}
          type="button"
          className="flex flex-col w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl transform hover:scale-105"
          style={{ backgroundImage: `url(${artist.picture === null ? Defaultimg : artist.picture})` }}>
          <div className="flex flex-col justify-end w-full h-full">
            <div className="text-left flex flex-col justify-between pt-6 pb-8 px-2 900:py-12 900:px-3 h-full w-full bg-black bg-opacity-40 hover:bg-opacity-10">
              <h1 className="font-scada text-mainColor font-bold text-2xl 900:text-3xl">Artist</h1>
              <div className="font-scada text-white font-bold text-2xl 900:text-3xl">{artist.name}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default SliderA;

SliderA.propTypes = {
  artists: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
