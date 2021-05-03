import React, { useRef } from 'react';
import Card from '../RecentAdds/Card';
import '../scrollbarwebkit.css';

import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function RecentAdds({ item, setCurrentTrack }) {
  const itemReversed = [...item];
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  itemReversed.reverse();

  return (
    <div ref={scrollWrapperRef} role="list" className="h-full pb-3 flex flex-row overflow-x-auto sidebar">
      <Card item={item} itemReversed={itemReversed} setCurrentTrack={setCurrentTrack} />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  item: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
