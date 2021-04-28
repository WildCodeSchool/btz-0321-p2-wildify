import React, { useRef } from 'react';
import AlbumCard from '../AlbumCarousel/AlbumCard';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function Album({ albums, handleClick }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  return (
    <div
      ref={scrollWrapperRef}
      role="list"
      className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
      <AlbumCard handleClick={handleClick} albums={albums} />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default Album;

Album.propTypes = {
  albums: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
