import React, { useState } from 'react';
import RecentAdds from './RecentAdds/RecentAdds';
import Artist from './ArtistCarousel/Artist';
import Album from './AlbumCarousel/Album';
import TrackList from './TrackListCarousel/Tracklist';
import PropTypes from 'prop-types';

export default function Carousel({ item, albums, artists }) {
  const [isRecentAddsActive, setIsRecentAddsActive] = useState(true);
  const [isArtistActive, setIsArtistActive] = useState(false);
  const [isAlbumActive, setIsAlbumActive] = useState(false);
  const [isTrackListActive, setIsTrackListActive] = useState(false);
  function handleArtistChange() {
    setIsRecentAddsActive(false);
    setIsArtistActive(true);
    setIsAlbumActive(false);
    setIsTrackListActive(false);
  }
  function handleRecentAddsChange() {
    setIsRecentAddsActive(true);
    setIsArtistActive(false);
    setIsAlbumActive(false);
    setIsTrackListActive(false);
  }
  function handleAlbumChange() {
    setIsRecentAddsActive(false);
    setIsArtistActive(false);
    setIsAlbumActive(true);
    setIsTrackListActive(false);
  }
  function handleTrackListChange() {
    setIsRecentAddsActive(false);
    setIsArtistActive(false);
    setIsAlbumActive(false);
    setIsTrackListActive(true);
  }

  return (
    <div className="grid grid-cols-1 grid-rows-mobileCarousel 900:grid-cols-2 900:grid-rows-desktopCarousel w-full h-full">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <p className={isRecentAddsActive ? 'text-white px-2' : 'hidden'}>Recent adds</p>
        <p className={isArtistActive ? 'text-white px-2' : 'hidden'}>Artist</p>
        <p className={isAlbumActive ? 'text-white px-2' : 'hidden'}>Album</p>
        <p className={isTrackListActive ? 'text-white px-2' : 'hidden'}>TrackList</p>
      </div>

      <div className="col-start-1 900:col-start-2 col-end-2 900:col-end-3 row-start-2 900:row-start-1 row-end-3 900:row-end-2 flex flex-row justify-around items-start text-white">
        <button onClick={handleRecentAddsChange}>Recent adds</button>
        <button onClick={handleArtistChange}>Artists</button>
        <button onClick={handleAlbumChange}>Album</button>
        <button onClick={handleTrackListChange}>TrackList</button>
      </div>

      {isRecentAddsActive && <RecentAdds item={item} />}
      {isArtistActive && <Artist artists={artists} />}
      {isAlbumActive && <Album albums={albums} />}
      {isTrackListActive && <TrackList item={item} />}
    </div>
  );
}

Carousel.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  artists: PropTypes.array.isRequired,
};
