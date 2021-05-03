import React, { useRef } from 'react';
import TrackListCard from '../TrackListCarousel/TrackListCard';
import '../scrollbarwebkit.css';

import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function RecentAdds({ item, setCurrentTrack }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <div ref={scrollWrapperRef} role="list" className="flex flex-row overflow-x-auto sidebar">
      <TrackListCard items={item} setCurrentTrack={setCurrentTrack} />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  item: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
