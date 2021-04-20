import React from 'react';
import PropTypes from 'prop-types';

function Next({ albums, index, setIndex }) {
  return (
    <button className="text-black cursor-pointer focus:outline-none" onClick={() => setIndex(index == albums.length - 1 ? 0 : index + 1)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-56" fill="#fff" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export default Next;

Next.propTypes = {
  albums: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
