import React from 'react';
import PropTypes from 'prop-types';
import Prev from '../../img/previous.svg';

function Previous({ albums, index, setIndex }) {
  return (
    <button className="absolute cursor-pointer focus:outline-none z-10" onClick={() => setIndex(index == 0 ? albums.length - 1 : index - 1)}>
      <img src={Prev} alt="previous" />
    </button>
  );
}

export default Previous;

Previous.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
