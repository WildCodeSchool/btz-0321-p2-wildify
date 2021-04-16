import React, { useRef, useEffect, useState } from 'react';
import Controls from '../playbar/controls/controls';
import './Player.css';
import PropTypes from 'prop-types';

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
}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPos, setSliderPos] = useState('100');
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const audioRef2 = useRef();
  // const [hiddenClass, setHiddenClass] = useState(true);

  const updateSong = () => {
    setOnListen(item[currentTrack].s3_link);
    if (audioRef2.current) {
      audioRef2.current.load();
    }
    setTitle(item[currentTrack].title);
    setArtist(item[currentTrack].artist.name);
    setAlbum(item[currentTrack].album.title);
    setPicture(item[currentTrack].album.picture);
  };

  const volumeChange = (e) => {
    setSliderPos(e.target.value);
    audioRef2.current.volume = sliderPos / 100;
  };

  const positionChange = (e) => {
    setSliderValue(e.target.value);
    audioRef2.current.currentTime = e.target.value;
  };

  const handlePause = () => {
    audioRef2.current.pause();
  };

  const handlePlay = () => {
    updateSong();
    audioRef2.current.play();
  };

  const handleBackWard = () => {
    audioRef2.current.pause();

    setCurrentTrack(currentTrack - 1);
    updateSong();
    handlePlay();
  };

  const handleForWard = () => {
    audioRef2.current.pause();
    if (currentTrack >= item.length) {
      setCurrentTrack(0);
      updateSong();
    } else {
      audioRef2.current.pause();

      setCurrentTrack(currentTrack + 1);
      updateSong();
      handlePlay();
    }
  };

  // const handleClick = () => {
  //   setHiddenClass(true);
  // };

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
    <div className="bg-black fixed flex flex-col  justify-between z-50 align-middle w-full h-full py-20">
      <audio id="audio" className="hidden" onEnded={handleForWard} ref={audioRef2} controls>
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
        Your browser does not support this audio format.
      </audio>
      <div className="flex justify-around items-center w-full align-middle px-10">
        <img src="./src/img/Group 44.png" className="w-5" alt="" />
        <input onChange={volumeChange} type="range" min="0" max="100" value={sliderPos} className="w-8/12 h-0.5 slider" id="myRange"></input>
      </div>
      <div className="w-full flex align-middle justify-center px-10">
        <img className="rounded-full w-2/4 max-w-xl" src={picture ? picture : './src/img/playbar-miniature.png'} alt="" />
      </div>
      <div className="text-white text-3xl font-Orbit flex flex-col items-center w-full align-middle justify-center px-10">
        <div className="font-Orbit">{title}</div>
        <div className="font-Orbit">{artist}</div>
        <div className="font-Orbit">{album}</div>
        <div>
          {title ? (
            <div className="flex align-middle justify-center items-center">
              <img src="./src/img/gifSon.gif" className="w-1/4" alt=""></img>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="w-full flex align-middle items-center justify-center px-10">
        <div className="text-white font-Orbit">{title ? secondsToHms(currentTime) : '00:00'}</div>
        <Controls handleBackWard={handleBackWard} handleForWard={handleForWard} handlePause={handlePause} handlePlay={handlePlay} />
        <div className="text-white font-Orbit">{title ? secondsToHms(duration - currentTime) : '00:00'}</div>
      </div>
      <div className="w-full flex align-middle items-center justify-center px-10">
        <input
          onChange={positionChange}
          type="range"
          min="0"
          max={duration}
          value={sliderValue}
          className="w-8/12 mx-14 h-0.5 slider"
          id="myRange"></input>
        <button onClick="">
          <img src="./src/img/arrow.svg" className="w-8 cursor-pointer" alt="" />
        </button>
      </div>
    </div>
  );
}

Player.propTypes = {
  item: PropTypes.object.isRequired,
  setPicture: PropTypes.string.isRequired,
  setAlbum: PropTypes.string.isRequired,
  setTitle: PropTypes.string.isRequired,
  setArtist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setOnListen: PropTypes.string.isRequired,
  onListen: PropTypes.string.isRequired,
  currentTrack: PropTypes.string.isRequired,
  setCurrentTrack: PropTypes.string.isRequired,
};
