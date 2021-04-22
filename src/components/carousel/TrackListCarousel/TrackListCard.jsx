import React from 'react';
import PropTypes from 'prop-types';

export default function TrackListCard({ picture, count, item }) {
  return (
    <div className="w-6/12 h-4/6">
      <div className=" text-white text-sm z-10">{item[count].title}</div>
      <img src={picture === null ? 'src/img/defaultPicture.png' : picture} alt="TrackListPicture" className="w-full h-full" />
    </div>
  );
}

TrackListCard.propTypes = {
  picture: PropTypes.any.isRequired,
  count: PropTypes.number.isRequired,
  item: PropTypes.array.isRequired,
};
