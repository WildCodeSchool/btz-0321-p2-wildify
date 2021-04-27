import React, { useRef } from 'react';
import AlbumCard from '../AlbumCarousel/AlbumCard';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function Album({
  albums,
  isTrackList,
  setAlbumChoice,
  setIsTrackList,
  setIsAlbumActive,
  setIsArtistActive,
  setIsRecentAddsActive,
  setIsTrackListActive,
}) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  return (
    <div
      ref={scrollWrapperRef}
      role="list"
      className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
      <AlbumCard
        albums={albums}
        setIsTrackList={setIsTrackList}
        setIsAlbumActive={setIsAlbumActive}
        setIsArtistActive={setIsArtistActive}
        setIsRecentAddsActive={setIsRecentAddsActive}
        setIsTrackListActive={setIsTrackListActive}
        isTrackList={isTrackList}
        setAlbumChoice={setAlbumChoice}
      />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default Album;

Album.propTypes = {
  albums: PropTypes.array.isRequired,
  setIsTrackList: PropTypes.func.isRequired,
  setIsTrackListActive: PropTypes.func.isRequired,
  setIsAlbumActive: PropTypes.func.isRequired,
  setIsArtistActive: PropTypes.func.isRequired,
  setIsRecentAddsActive: PropTypes.func.isRequired,
  isTrackList: PropTypes.bool.isRequired,
  setAlbumChoice: PropTypes.func.isRequired,
};
