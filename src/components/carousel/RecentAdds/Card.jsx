import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ picture, count, item }) {
  const itemReversed = [...item];
  itemReversed.reverse();

  return (
    <div className="w-6/12 h-4/6">
      <div className=" text-white text-sm z-10">{itemReversed[count].title}</div>
      <img src={picture === null ? 'src/img/defaultPicture.png' : picture} alt="MusicPicture" className="w-full h-full" />
    </div>
  );
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};
