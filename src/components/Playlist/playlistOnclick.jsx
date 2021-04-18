import React from 'react';
import PropTypes from 'prop-types';

function PlaylistOnclick({ title, Artist, img }) {
  return (
    <div className="bg p-1">
      <div className="flex flex-wrap items-center text-white mt-4 border-b border-gra border-white pb-1 mb-2 hover:border-mainColor hover:text-mainColor transform hover:scale-105">
        <img src={img} alt="albumPicture" className="h-10 w-10 mr-2 rounded-full " />
        <div className=" font-scada text-xs font-bold mr-2 ">{title} -</div>
        <div className=" font-scada text-xs ">{Artist}</div>
      </div>
    </div>
  );
}

export default PlaylistOnclick;

PlaylistOnclick.propTypes = {
  title: PropTypes.string.isRequired,
  Artist: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};
