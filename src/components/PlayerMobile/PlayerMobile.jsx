import React, { useEffect, useRef } from 'react';
import Controls from '../playbar/controls/controls';
import PropTypes from 'prop-types';
import Arrow from '../../img/arrow.svg';

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
}) {
  useEffect(() => {
    updateSong();
  }, [currentTrack]);
  const updateSong = () => {
    if (audio) {
      setOnListen(item[currentTrack].s3_link);
      audioRef3.current.load();
      audioRef3.current.play();
    }
    setPicture(item[currentTrack].album.picture);
  };
  const audioRef3 = useRef();
  const handlePause = () => {
    audioRef3.current.pause();
    setAudio(false);
    setIsPlaySwitch(true);
  };

  const handlePlay = () => {
    audioRef3.current.play();
    setAudio(true);
    updateSong();
    setIsPlaySwitch(false);
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
  };

  return (
    <div className="bg-bgPlaybar shadow-player w-mpb h-24 z-50 p-4 flex items-center align-middle justify-center rounded-full fixed bottom-3 ">
      <audio id="audio" className="hidden" onEnded={handleForWard} ref={audioRef3} controls>
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
        Your browser does not support this audio format.
      </audio>
      <div
        className="h-20 w-28 rounded-full shadow-ImgPlaybar"
        style={{
          backgroundImage: `url(${picture})`,
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
      <button onClick={handleClick} className="flex mr-5 items-center justify-center flex-col h-full">
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
  setPicture: PropTypes.string,
};
