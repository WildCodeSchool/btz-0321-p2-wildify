import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ picture, count, artists }) {
  return (
    <div className="w-6/12 h-4/6">
      <div className=" text-white text-sm z-10"> {artists[count].name} </div>
      <img src={picture === null ? 'src/img/defaultPicture.png' : picture} alt="ArtistPicture" className="w-full h-full" />
    </div>
  );
}

ArtistCard.propTypes = {
  picture: PropTypes.any.isRequired,
  artists: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};
