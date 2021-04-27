import React, { useRef } from 'react';
import ArtistCard from '../ArtistCarousel/ArtistCard';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function Artist({ artists }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  return (
    <div
      ref={scrollWrapperRef}
      role="list"
      className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
      <ArtistCard artists={artists} />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default Artist;

Artist.propTypes = {
  artists: PropTypes.array.isRequired,
};
