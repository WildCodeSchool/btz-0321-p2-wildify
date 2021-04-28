import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prev from '../../img/previous.svg';

function PreviousA({ artists, index, setIndex, width, setArtistChoice }) {
  const [translationTopArrow, setTranslationTopArrow] = useState();
  useEffect(() => {
    if (width < 900) {
      setTranslationTopArrow('-translate-y-24');
    } else {
      setTranslationTopArrow('-translate-y-32');
    }
  }, [width]);

  const handleClick = () => {
    setIndex(index === 0 ? artists.length - 1 : index - 1);
    setArtistChoice(artists[index === 0 ? artists.length - 1 : index - 1].name);
  };
  return (
    <button className={`absolute cursor-pointer transform ${translationTopArrow} focus:outline-none z-10`} onClick={handleClick}>
      <img src={Prev} alt="previous" />
    </button>
  );
}

export default PreviousA;

PreviousA.propTypes = {
  artists: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setArtistChoice: PropTypes.func.isRequired,
};
