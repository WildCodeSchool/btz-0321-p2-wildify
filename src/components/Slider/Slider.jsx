import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Slider({ albums, index, width, handleClick }) {
  const [translationSlide, setTranslationSlide] = useState();
  const [translationTitle, setTranslationTitle] = useState();
  const [translationArtist, setTranslationArtist] = useState();

  useEffect(() => {
    if (width < 900) {
      setTranslationSlide(-13.75);
      setTranslationTitle('translate-y-6');
      setTranslationArtist('translate-y-36');
    } else {
      setTranslationSlide(-18.75);
      setTranslationTitle('translate-y-8');
      setTranslationArtist('translate-y-56');
    }
  }, [width]);
  return (
    <div
      className="h-full w-full"
      style={{
        transform: `translateY(${translationSlide * index}rem)`,
        transition: `transform 0.5s ease-in-out`,
      }}>
      {albums.map((album, index) => (
        <button
          onClick={handleClick}
          key={index}
          type="button"
          className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten"
          style={{ backgroundImage: `url(${album.picture})` }}>
          <div className={`absolute font-scada font-bold transform shadow-2xl text-white pl-4 ${translationTitle}`}>{album.title}</div>
          <div className={`absolute font-cuprum text-xs font-thin border-opacity-25 shadow-2xl transform  text-white pl-4 ${translationArtist}`}>
            {album.artist}
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
