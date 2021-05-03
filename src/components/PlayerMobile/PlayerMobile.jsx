import React, { useEffect, useRef } from 'react';
import Controls from '../playbar/controls/controls';
import PropTypes from 'prop-types';
import Arrow from '../../img/arrow.svg';
import Defaultimg from '../../img/defaultPicture.png';

export default function PlayerMobile({
  setIsMobilePlayerVisible,
  setIsPlayerVisible,
  setOnListen,
  onListen,
  item,
  currentTrack,
  setCurrentTrack,
  audio,
  setAudio,
  isPlaySwitch,
  setIsPlaySwitch,
  picture,
  setPicture,
  isAlbum,
  isArtist,
  selectedSong,
  isAlbumTrackList,
  isArtistTrackList,
}) {
  const audioRef3 = useRef();
  useEffect(() => {
    updateSong();
  }, [currentTrack]);

  useEffect(() => {
    updateSong();
  }, [selectedSong]);

  const updateSong = () => {
    if (isAlbum || isAlbumTrackList || isArtistTrackList || isArtist) {
      setOnListen(selectedSong[0].s3_link);
      setPicture(selectedSong[0].album.picture);
    } else {
      setOnListen(item[currentTrack].s3_link);
      setPicture(item[currentTrack].album.picture);
    }
    if (audioRef3.current) {
      audioRef3.current.load();
    }
    if (audio === true) {
      audioRef3.current.play();
    }
  };
  const handlePause = () => {
    audioRef3.current.pause();
    setAudio(false);
    setIsPlaySwitch(true);
  };

  const handlePlay = () => {
    setAudio(true);
    setIsPlaySwitch(false);
    updateSong();
    audioRef3.current.play();
  };

  const handleBackWard = () => {
    if (currentTrack === 0) {
      setCurrentTrack(item.length - 1);
      audioRef3.current.pause();
      setAudio(true);
      updateSong();
      handlePlay();
    } else {
      audioRef3.current.pause();
      setAudio(true);
      setCurrentTrack((currentTrack -= 1));
      updateSong();
      handlePlay();
    }
  };

  const handleForWard = () => {
    if (currentTrack >= item.length - 1) {
      setCurrentTrack(0);
      updateSong();
    } else {
      setCurrentTrack((currentTrack += 1));
      updateSong();
    }
  };
  const handleClick = () => {
    setIsPlayerVisible(true);
    setIsMobilePlayerVisible(false);
    audioRef3.current.pause();
  };

  return (
    <div className="bg-bgPlaybar shadow-player w-mpb h-playbarMobile z-30 p-4 flex items-center align-middle justify-center rounded-full fixed bottom-2 ">
      <audio id="audio" className="hidden" onEnded={handleForWard} ref={audioRef3} controls>
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
        Your browser does not support this audio format.
      </audio>
      <div
        className="h-16 w-24 rounded-full shadow-ImgPlaybar"
        style={{
          backgroundImage: `url(${picture === null ? Defaultimg : picture})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}></div>
      <Controls
        handleBackWard={handleBackWard}
        handleForWard={handleForWard}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isPlaySwitch={isPlaySwitch}
      />
      <button onClick={handleClick} className="flex mr-5 focus:outline-none items-center justify-center flex-col h-full">
        <img src={Arrow} className="w-8 cursor-pointer" alt="" />
      </button>
    </div>
  );
}

PlayerMobile.propTypes = {
  setOnListen: PropTypes.func.isRequired,
  onListen: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
  currentTrack: PropTypes.number.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  audio: PropTypes.bool.isRequired,
  setAudio: PropTypes.func.isRequired,
  setIsPlayerVisible: PropTypes.func.isRequired,
  setIsMobilePlayerVisible: PropTypes.func.isRequired,
  isPlaySwitch: PropTypes.bool,
  setIsPlaySwitch: PropTypes.func,
  picture: PropTypes.string,
  selectedSong: PropTypes.array,
  isAlbum: PropTypes.bool.isRequired,
  isArtist: PropTypes.bool.isRequired,
  setPicture: PropTypes.any.isRequired,
  isAlbumTrackList: PropTypes.bool.isRequired,
  isArtistTrackList: PropTypes.bool.isRequired,
};
