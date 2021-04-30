import React, { useRef } from 'react';
import ArtistCard from '../ArtistCarousel/ArtistCard';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function Artist({ artists, handleArtistClick }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  return (
    <div ref={scrollWrapperRef} role="list" className="h-full pb-3 flex flex-row overflow-x-auto sidebar">
      <ArtistCard artists={artists} handleArtistClick={handleArtistClick} />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default Artist;

Artist.propTypes = {
  handleArtistClick: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
};
