import React, { useRef } from 'react';
import ArtistCard from '../ArtistCarousel/ArtistCard';
import PropTypes from 'prop-types';
import useScrollBox from '../scroll';

function Artist({ artists, handleArtistClick, setMyPlaylist }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  const handleClick = (e) => {
    let myPlaylist = localStorage.getItem('myPlaylist');
    myPlaylist = myPlaylist ? myPlaylist.split(',') : [];
    myPlaylist.push(e.target.value);
    localStorage.setItem('myPlaylist', myPlaylist.toString());
    setMyPlaylist(localStorage.getItem('myPlaylist').split(','));
  };
  return (
    <div ref={scrollWrapperRef} role="list" className="h-full pb-3 flex flex-row overflow-x-auto sidebar">
      <ArtistCard
        isDragging={isDragging}
        setMyPlaylist={setMyPlaylist}
        onClick={handleClick}
        artists={artists}
        handleArtistClick={handleArtistClick}
      />
      <div className="hidden">{isDragging}</div>
    </div>
  );
}

export default Artist;

Artist.propTypes = {
  handleArtistClick: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
};
