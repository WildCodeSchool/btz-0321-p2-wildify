import React, { useRef } from 'react';
import Card from '../RecentAdds/Card';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';
import '../scrollbarwebkit.css';
function RecentAdds({ item, setSelectedSong, setMyPlaylist, setIsPlaylist, setIsRecentAddsActive }) {
  const itemReversed = [...item];
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  itemReversed.reverse();

  return (
    <div
      ref={scrollWrapperRef}
      role="list"
      className="sidebar col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
      <Card
        item={item}
        setIsRecentAddsActive={setIsRecentAddsActive}
        setMyPlaylist={setMyPlaylist}
        setIsPlaylist={setIsPlaylist}
        itemReversed={itemReversed}
        setSelectedSong={setSelectedSong}
      />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  item: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  setIsRecentAddsActive: PropTypes.func.isRequired,
};
