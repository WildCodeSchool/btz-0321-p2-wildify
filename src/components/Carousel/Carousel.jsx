import React, { useEffect, useState } from 'react';
import RecentAdds from './RecentAdds/RecentAdds';
import Artist from './ArtistCarousel/Artist';
import Album from './AlbumCarousel/Album';
import TrackList from './TrackListCarousel/Tracklist';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults/SearchResults';

export default function Carousel({ item, albums, artists, onSearch, setCurrentTrack }) {
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (onSearch) {
      setIsAlbumActive(false);
      setIsArtistActive(false);
      setIsTrackListActive(false);
      setIsRecentAddsActive(false);
    } else {
      setIsRecentAddsActive(true);
    }
  }, [onSearch]);

  return (
    <div className="flex flex-col w-full h-full p-2">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <p className={isRecentAddsActive ? ' p-3 font-cuprum text-4xl font-bold text-mainColor px-2' : 'hidden'}>Recent adds</p>
        <p className={isArtistActive ? ' p-3 font-cuprum text-4xl font-bold text-mainColor px-2' : 'hidden'}>Artist</p>
        <p className={isAlbumActive ? ' p-3 font-cuprum text-4xl font-bold text-mainColor px-2' : 'hidden'}>Album</p>
        <p className={isTrackListActive ? ' p-3 font-cuprum text-4xl font-bold text-mainColor px-2' : 'hidden'}>TrackList</p>
      </div>

      <div className="pb-4 flex flex-row justify-around  900:w-full 900:justify-end ">
        <button
          className={
            isRecentAddsActive
              ? '900:mr-8 900:mb-2 focus:outline-none text-mainColor'
              : '900:mr-8 900:mb-2 focus:outline-none font-scada text-white font-bold '
          }
          onClick={handleRecentAddsChange}>
          Recent adds
        </button>
        <button
          className={
            isArtistActive
              ? '900:mr-8 900:mb-2 focus:outline-none text-mainColor'
              : '900:mr-8 900:mb-2 focus:outline-none font-scada text-white font-bold'
          }
          onClick={handleArtistChange}>
          Artists
        </button>
        <button
          className={
            isAlbumActive
              ? '900:mr-8 900:mb-2 focus:outline-none text-mainColor'
              : '900:mr-8 900:mb-2 focus:outline-none font-scada text-white font-bold'
          }
          onClick={handleAlbumChange}>
          Album
        </button>
        <button
          className={
            isTrackListActive
              ? '900:mr-8 900:mb-2 focus:outline-none text-mainColor'
              : '900:mr-8 900:mb-2 focus:outline-none font-scada text-white font-bold'
          }
          onClick={handleTrackListChange}>
          TrackList
        </button>
      </div>

      {isRecentAddsActive && <RecentAdds count={count} setCount={setCount} item={item} setCurrentTrack={setCurrentTrack} />}
      {isArtistActive && <Artist count={count} setCount={setCount} artists={artists} />}
      {isAlbumActive && <Album count={count} setCount={setCount} albums={albums} />}
      {isTrackListActive && <TrackList count={count} setCount={setCount} item={item} setCurrentTrack={setCurrentTrack} />}
      {onSearch && <SearchResults onSearch={onSearch} item={item} />}
    </div>
  );
}

Carousel.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  artists: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  onSearch: PropTypes.string,
};
