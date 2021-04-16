import React from 'react';
import PropTypes from 'prop-types';

function Playlist({ img, title, description }) {
  return (
    <div className="rounded-3xl flex 900:mt-5 mt-3 items-center p-2 bg-black bg-opacity-20 shadow-searchbar cursor-pointer hover:bg-opacity-50">
      <img src={img} alt="Playlist1" className="w-plist h-pl border-2 border-green-300 rounded-fullist rounded-3xl" />
      <div className="flex-col ml-3">
        <h3 className="text-white font-scada font-medium ">{title}</h3>
        <p className="text-white font-cuprum text-xs font-thin">{description}</p>
      </div>
    </div>
  );
}

export default Playlist;

Playlist.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
