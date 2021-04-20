import React from 'react';
import PropTypes from 'prop-types';
import Nxt from '../../img/next.svg';

function Next({ albums, index, setIndex }) {
  return (
    <button
      className=" absolute top-almost cursor-pointer focus:outline-none bg-transparent z-10"
      onClick={() => setIndex(index === albums.length - 1 ? 0 : index + 1)}>
      <img src={Nxt} alt="next" />
    </button>
  );
}

export default Next;

Next.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
