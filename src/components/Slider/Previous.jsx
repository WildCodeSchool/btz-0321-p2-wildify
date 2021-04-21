import React from 'react';
import PropTypes from 'prop-types';

function Previous({ albums, index, setIndex }) {
  return (
    <button className="text-black cursor-pointer focus:outline-none" onClick={() => setIndex(index == 0 ? albums.length - 1 : index - 1)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-56" fill="#fff" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default Previous;

Previous.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};