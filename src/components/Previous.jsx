import React from 'react';
import PropTypes from 'prop-types';
import previous from '../img/previous.svg';

function Previous({ item, index, setIndex }) {
  const Previous = { previous };
  return (
    <button className="text-black cursor-pointer focus:outline-none" onClick={() => setIndex(index == 0 ? item.length - 1 : index - 1)}>
      <img src={Previous.previous} alt="previous" />
    </button>
  );
}

export default Previous;

Previous.propTypes = {
  item: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
