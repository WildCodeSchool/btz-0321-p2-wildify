import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ picture, albums, count }) {
  return (
    <div className="w-6/12 h-4/6">
      <div className=" text-white text-sm z-10">{albums[count].title}</div>
      <img src={picture === null ? 'src/img/defaultPicture.png' : picture} alt="AlbumPicture" className="w-full h-full" />
    </div>
  );
}

AlbumCard.propTypes = {
  picture: PropTypes.string.isRequired,
  albums: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};
