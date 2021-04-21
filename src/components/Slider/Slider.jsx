import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

function Slider({ albums, index, width }) {
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
        <div key={index} className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl" style={{ backgroundImage: `url(${album.picture})` }}>
          <div className={`Scada transform  text-white pl-1 ${translationTitle}`}>{album.title}</div>
          <div className={`Cuprum transform  text-white pl-1 ${translationArtist}`}>{album.artist}</div>
        </div>
      ))}
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.any,
  width: PropTypes.number.isRequired,
};
