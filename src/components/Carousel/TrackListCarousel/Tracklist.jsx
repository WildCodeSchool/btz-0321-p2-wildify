import React, { useRef } from 'react';
import TrackListCard from '../TrackListCarousel/TrackListCard';
import '../scrollbarwebkit.css';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function RecentAdds({ item, setCurrentTrack }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <div
      ref={scrollWrapperRef}
      role="list"
      className="sidebar col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
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
