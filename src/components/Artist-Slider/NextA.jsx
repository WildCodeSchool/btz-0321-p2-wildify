import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Nxt from '../../img/next.svg';

function NextA({ artists, index, setIndex, width, setArtistChoice }) {
  const [translationDownArrow, setTranslationDownArrow] = useState();

  useEffect(() => {
    if (width < 900) setTranslationDownArrow('translate-y-24');
    else {
      setTranslationDownArrow('translate-y-32');
    }
  }, [width]);

  const handleClick = () => {
    setIndex(index === artists.length - 1 ? 0 : index + 1);
    setArtistChoice(artists[index === artists.length - 1 ? 0 : index + 1].name);
  };
  return (
    <button className={`absolute transform ${translationDownArrow} cursor-pointer focus:outline-none bg-transparent z-10`} onClick={handleClick}>
      <img src={Nxt} alt="next" />
    </button>
  );
}

export default NextA;

NextA.propTypes = {
  artists: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setArtistChoice: PropTypes.func.isRequired,
};
