import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Nxt from '../../img/next.svg';

function Next({ albums, index, setIndex, width, setAlbumChoice }) {
  const [translationDownArrow, setTranslationDownArrow] = useState();

  useEffect(() => {
    if (width < 900) setTranslationDownArrow('translate-y-24');
    else {
      setTranslationDownArrow('translate-y-32');
    }
  }, [width]);

  const handleClick = () => {
    setIndex(index === albums.length - 1 ? 0 : index + 1);
    setAlbumChoice(albums[index === albums.length - 1 ? 0 : index + 1].title);
  };
  return (
    <button className={`absolute transform ${translationDownArrow} cursor-pointer focus:outline-none bg-transparent z-10`} onClick={handleClick}>
      <img src={Nxt} alt="next" />
    </button>
  );
}

export default Next;

Next.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setAlbumChoice: PropTypes.func.isRequired,
};
