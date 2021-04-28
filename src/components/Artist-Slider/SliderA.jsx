import React, { useState, useEffect } from 'react';
import ImgDefault from '../../img/defaultAlbumImage.png';
import PropTypes from 'prop-types';

function SliderA({ artists, index, width, handleClick }) {
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
      {artists.map((artist, index) => (
        <button
          onClick={handleClick}
          key={index}
          type="button"
          className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten"
          style={{ backgroundImage: `url(${artist.picture})` }}
          alt={ImgDefault}>
          <div className={`absolute font-scada font-bold transform shadow-2xl text-white pl-4 ${translationTitle}`}>{artist.name}</div>
          <div className={`absolute font-cuprum text-xs font-thin border-opacity-25 shadow-2xl transform  text-white pl-4 ${translationArtist}`}>
            {artist.artist}
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
