import React, { useEffect, useState } from 'react';
import RecentAdds from './RecentAdds/RecentAdds';
import Artist from './ArtistCarousel/Artist';
import Album from './AlbumCarousel/Album';
import TrackList from './TrackListCarousel/Tracklist';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults/SearchResults';
import AlbumTrackList from './AlbumCarousel/AlbumTrackList';
import ArtistTrackList from './ArtistCarousel/ArtistTrackList';

export default function Carousel({
  item,
  albums,
  artists,
  onSearch,
  isAlbumTrackList,
  setIsAlBumTrackList,
  setCurrentTrack,
  setSelectedSong,
  setIsArtistTrackList,
  isArtistTrackList,
}) {
  const [count, setCount] = useState(0);
  const [isRecentAddsActive, setIsRecentAddsActive] = useState(true);
  const [isArtistActive, setIsArtistActive] = useState(false);
  const [isAlbumActive, setIsAlbumActive] = useState(false);
  const [isTrackListActive, setIsTrackListActive] = useState(false);
  const [albumChoice, setAlbumChoice] = useState('');
  const [artistChoice, setArtistChoice] = useState('');

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

  const handleAlbumClick = (e) => {
    if (!isAlbumTrackList) {
      setAlbumChoice(e.target.innerHTML);
      setIsAlBumTrackList(true);
      setIsAlbumActive(false);
      setIsArtistActive(false);
      setIsTrackListActive(false);
      setIsRecentAddsActive(false);
    } else {
      setIsAlBumTrackList(false);
      setIsAlbumActive(true);
    }
  };

  const handleArtistClick = (e) => {
    if (!isArtistTrackList) {
      setArtistChoice(e.target.innerHTML);
      setIsAlBumTrackList(false);
      setIsAlbumActive(false);
      setIsArtistActive(false);
      setIsArtistTrackList(true);
      setIsTrackListActive(false);
      setIsRecentAddsActive(false);
    } else {
      setIsArtistTrackList(false);
      setIsArtistActive(true);
    }
  };

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

      {isRecentAddsActive && <RecentAdds count={count} setCount={setCount} item={item} setCurrentTrack={setCurrentTrack} />}
      {isArtistActive && <Artist count={count} setCount={setCount} handleArtistClick={handleArtistClick} artists={artists} />}
      {isAlbumActive && <Album handleAlbumClick={handleAlbumClick} albums={albums} />}
      {isTrackListActive && <TrackList count={count} setCount={setCount} item={item} setCurrentTrack={setCurrentTrack} />}
      {isAlbumTrackList && (
        <AlbumTrackList setSelectedSong={setSelectedSong} albumChoice={albumChoice} handleAlbumClick={handleAlbumClick} item={item} />
      )}
      {isArtistTrackList && (
        <ArtistTrackList setSelectedSong={setSelectedSong} artistChoice={artistChoice} handleArtistClick={handleArtistClick} item={item} />
      )}
      {onSearch && <SearchResults onSearch={onSearch} item={item} />}
    </div>
  );
}

Carousel.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  artists: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  isAlbumTrackList: PropTypes.bool.isRequired,
  setIsAlBumTrackList: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setIsArtistTrackList: PropTypes.func.isRequired,
  isArtistTrackList: PropTypes.bool.isRequired,
  onSearch: PropTypes.string,
};
