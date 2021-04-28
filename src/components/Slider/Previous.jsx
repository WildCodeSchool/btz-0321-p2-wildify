import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prev from '../../img/previous.svg';

function Previous({ albums, index, setIndex, width, setAlbumChoice }) {
  const [translationTopArrow, setTranslationTopArrow] = useState();
  useEffect(() => {
    if (width < 900) {
      setTranslationTopArrow('-translate-y-24');
    } else {
      setTranslationTopArrow('-translate-y-32');
    }
  }, [width]);

  const handleClick = () => {
    setIndex(index === 0 ? albums.length - 1 : index - 1);
    setAlbumChoice(albums[index === 0 ? albums.length - 1 : index - 1].title);
  };
  return (
    <button className={`absolute cursor-pointer transform ${translationTopArrow} focus:outline-none z-10`} onClick={handleClick}>
      <img src={Prev} alt="previous" />
    </button>
  );
}

export default Previous;

Previous.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setAlbumChoice: PropTypes.func.isRequired,
};
