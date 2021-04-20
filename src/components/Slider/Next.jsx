import React from 'react';
import PropTypes from 'prop-types';
import next from '../../img/next.svg';

function Next({ item, index, setIndex }) {
  const Next = { next };
  return (
    <button className="text-black cursor-pointer focus:outline-none" onClick={() => setIndex(index == item.length - 1 ? 0 : index + 1)}>
      <img src={Next.next} alt="" />
    </button>
  );
}

export default Next;

Next.propTypes = {
  item: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
