import React, { useRef, useEffect, useState } from 'react';
import Controls from '../playbar/controls/controls';
import './Player.css';
import PropTypes from 'prop-types';
import Arrow from '../../img/arrow.svg';
import Miniature from '../../img/playbar-miniature.png';

export default function Player({
  setPicture,
  setAlbum,
  setTitle,
  setArtist,
  picture,
  artist,
  album,
  title,
  setOnListen,
  onListen,
  item,
  currentTrack,
  setCurrentTrack,
  audio,
  setAudio,
  setIsPlayerVisible,
  setIsMobilePlayerVisible,
  isPlaySwitch,
  setIsPlaySwitch,
}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');

  const audioRef2 = useRef();

  useEffect(() => {
    updateSong();
  }, [currentTrack]);

  const updateSong = () => {
    setOnListen(item[currentTrack].s3_link);
    setAudio(true);
    if (audioRef2.current) {
      audioRef2.current.load();
    }
    if (audio) {
      audioRef2.current.play();
    }
    setTitle(item[currentTrack].title);
    setArtist(item[currentTrack].artist.name);
    setAlbum(item[currentTrack].album.title);
    setPicture(item[currentTrack].album.picture);
  };

  const positionChange = (e) => {
    setSliderValue(e.target.value);
    audioRef2.current.currentTime = e.target.value;
  };

  const handlePause = () => {
    audioRef2.current.pause();
    setAudio(false);
    setIsPlaySwitch(true);
  };

  const handlePlay = () => {
    setAudio(true);
    setIsPlaySwitch(false);
    audioRef2.current.play();
  };

  const handleBackWard = () => {
    if (currentTrack === 0) {
      setCurrentTrack(item.length - 1);
      audioRef2.current.pause();
      setAudio(true);
      updateSong();
      handlePlay();
    } else {
      audioRef2.current.pause();
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
    setIsPlayerVisible(false);
    setIsMobilePlayerVisible(true);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (audioRef2.current.currentTime > 0) {
        setSliderValue(audioRef2.current.currentTime);
        setDuration(Math.floor(audioRef2.current.duration));
        setCurrentTime(Math.floor(audioRef2.current.currentTime));
      }
    }, 100);
    return function () {
      clearInterval(timer);
    };
  }, [sliderValue, audioRef2]);

  function secondsToHms(d) {
    d = Number(d);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    return m + ':' + s;
  }

  return (
    <div className="h-full w-full  absolute">
      <div className=" fixed flex justify-around flex-col z-50  w-full h-full py-8 px-8 backGrnd">
        <audio id="audio" className="hidden" onEnded={handleForWard} ref={audioRef2} controls>
          <source src={onListen} type="audio/mp3"></source>
          <track default kind="captions" />
          Your browser does not support this audio format.
        </audio>
        <div className="flex justify-end items-center w-full">
          <button onClick={handleClick}>
            <img className="transform rotate-180 w-5" src={Arrow} alt="" />
          </button>
        </div>
        <div className="flex justify-center">
          <div
            className="rounded-full w-72 h-72  shadow-MobilPlaybar"
            style={{
              backgroundImage: `url(${picture ? picture : Miniature})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}></div>
        </div>
        <div className="text-white font-scada flex flex-col mt-5 items-center w-full align-middle justify-center px-10">
          <div className="text-2xl text-center">{title}</div>
          <div className="font-scada mt-2 text-center">
            {artist} - {album}
          </div>
        </div>
        <div className="w-full flex align-middle  mt-8 w-fullitems-center justify-center">
          <Controls
            handleBackWard={handleBackWard}
            handleForWard={handleForWard}
            handlePause={handlePause}
            handlePlay={handlePlay}
            isPlaySwitch={isPlaySwitch}
          />
        </div>
        <div className="w-full flex mt-3 px-4 items-center justify-center">
          <div className="text-white font-scada mr-5">{audio ? secondsToHms(currentTime) : '00:00'}</div>
          <div className="w-full flex align-middle items-center justify-center">
            <input
              onChange={positionChange}
              type="range"
              min="0"
              max={duration}
              value={sliderValue}
              className="w-9/12  h-1.5 rounded slider"
              id="myRange"></input>
          </div>
          <div className="text-white font-scada ml-5">{audio ? secondsToHms(duration - currentTime) : '00:00'}</div>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  item: PropTypes.array.isRequired,
  setPicture: PropTypes.func.isRequired,
  setAlbum: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setArtist: PropTypes.func.isRequired,
  picture: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  title: PropTypes.string,
  setOnListen: PropTypes.func.isRequired,
  onListen: PropTypes.string.isRequired,
  currentTrack: PropTypes.number.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  audio: PropTypes.bool.isRequired,
  setAudio: PropTypes.func.isRequired,
  setIsPlayerVisible: PropTypes.func.isRequired,
  setIsMobilePlayerVisible: PropTypes.func.isRequired,
  isPlaySwitch: PropTypes.bool.isRequired,
  setIsPlaySwitch: PropTypes.func?.isRequired,
};
