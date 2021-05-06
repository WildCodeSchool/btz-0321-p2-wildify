import React, { useRef } from 'react';
import AlbumCard from '../AlbumCarousel/AlbumCard';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function Album({ albums, handleAlbumClick }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <div ref={scrollWrapperRef} role="list" className="h-full pb-3 flex flex-row overflow-x-auto sidebar">
      <AlbumCard handleAlbumClick={handleAlbumClick} albums={albums} isDragging={isDragging} />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default Album;

Album.propTypes = {
  albums: PropTypes.array.isRequired,
  handleAlbumClick: PropTypes.func.isRequired,
};
