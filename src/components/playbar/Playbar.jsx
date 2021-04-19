import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/controls';
import HiddenPlayer from '../HiddenPlayer/HiddenPlayer';
import './playbar.css';

export default function Playbar({
  title,
  album,
  artist,
  picture,
  item,
  audio,
  currentTrack,
  setCurrentTrack,
  setAudio,
  onListen,
  setOnListen,
  handleSong,
  setPicture,
  setTitle,
  setAlbum,
  setArtist,
}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPos, setSliderPos] = useState('100');

  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const audioRef = useRef(null);

  function secondsToHms(d) {
    d = Number(d);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    return m + ':' + s;
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (audioRef.current.currentTime > 0) {
        setSliderValue(audioRef.current.currentTime);
        setDuration(Math.floor(audioRef.current.duration));
        setCurrentTime(Math.floor(audioRef.current.currentTime));
      }
    }, 100);
    return function () {
      clearInterval(timer);
    };
  }, [sliderValue, audioRef]);


  useEffect(() => {
    if (audioRef.current.currentTime === audioRef.current.duration) {
      handleForWard();
    }
  }, [currentTime]);

  useEffect(() => {
    updateSong();
  }, [currentTrack]);


  const updateSong = () => {
    if (currentTrack) {
      setOnListen(item[currentTrack].s3_link);
      setTitle(item[currentTrack].title);
      setArtist(item[currentTrack].artist.name);
      setAlbum(item[currentTrack].album.title);
      setPicture(item[currentTrack].album.picture);
    } else {
      setOnListen(item[0].s3_link);
      setTitle(item[0].title);
      setArtist(item[0].artist.name);
      setAlbum(item[0].album.title);
      setPicture(item[0].album.picture);
    }

    if (audioRef.current) {
      audioRef.current.load();
    }
    if (currentTrack) {
      audioRef.current.play();
    }
  };

  const volumeChange = (e) => {
    setSliderPos(e.target.value);
    audioRef.current.volume = sliderPos / 100;
  };

  const positionChange = (e) => {
    setSliderValue(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const handlePause = () => {
    audioRef.current.pause();
    setAudio(false);
  };

  const handlePlay = () => {
    setAudio(true);
    updateSong();
    audioRef.current.play();
  };

  const handleBackWard = () => {
    audioRef.current.pause();
    setAudio(true);
    setCurrentTrack(currentTrack - 1);
    updateSong();
    handlePlay();
  };

  const handleForWard = () => {
    setAudio(true);
    setCurrentTrack(currentTrack + 1);
  };

  return (
    <div className="w-2/4 max-h-40 flex-row align-middle justify-center   fixed bottom-3">
      <HiddenPlayer
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        item={item}
        handleSong={handleSong}
        onListen={onListen}
        setOnListen={setOnListen}
        updateSong={updateSong}
        audioRef={audioRef}
        handleForWard={handleForWard}
      />

      <div
        className="flex  py-2
       bg-black opacity-80 items-center h-full max-h-28 justify-center rounded-3xl ">
        <div className="flex-row w-5/12 flex align-middle justify-center h-full">
          <div className="flex-col w-5/12  flex items-center justify-around">
            <img className="w-9/12  rounded-full" src={picture} alt="" />
          </div>
          <div className="flex-col w-2/4 flex items-left py-6 justify-between ">
            <div className="text-white font-Orbit text-xs">{title}</div>
            <div className="text-white font-Orbit text-xs">{album}</div>
            <div className="text-white font-Orbit text-xs">{artist}</div>
          </div>
        </div>
        <div className="flex-col align-middle  justify-center  w-8/12">
          <div className="flex h-full w-full align-middle justify-center items-center">
            {audio ? (
              <div className="h-full flex w-4/12  items-center justify-center align-middle   ">
                <img className="w-full" src="./src/img/gifSon.gif" alt="" />
              </div>
            ) : (
              ''
            )}
            <div className="h-full  w-9/12">
              <div className="endTime"></div>
              <input onChange={volumeChange} type="range" min="0" max="100" value={sliderPos} className="w-11/12 h-0.5 slider" id="myRange"></input>
              <div className="endTime"></div>
            </div>
            <Controls handlePlay={handlePlay} handlePause={handlePause} handleBackWard={handleBackWard} handleForWard={handleForWard} />
          </div>
          <div className="w-fulltext-base h-full flex align-middle item-center justify-center">
            <div className=" px-1 mx-2 text-xs  font-Orbit text-white">{audio ? secondsToHms(currentTime) : '00:00'}</div>
            <div className="w-4/5">
              <div className="w-full">
                <div className="endTime"></div>
                <input
                  onChange={positionChange}
                  type="range"
                  min="0"
                  max={duration}
                  value={sliderValue}
                  className="w-full h-0.5 slider"
                  id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
            <div className="text-white  font-Orbit mx-6">{audio ? secondsToHms(duration - currentTime) : '00:00'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Playbar.propTypes = {
  item: PropTypes.array.isRequired,
  setAudio: PropTypes.func.isRequired,
  onListen: PropTypes.string.isRequired,
  setOnListen: PropTypes.func.isRequired,
  handleSong: PropTypes.func.isRequired,
  currentTrack: PropTypes.number.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  audio: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setArtist: PropTypes.func.isRequired,
  setAlbum: PropTypes.func.isRequired,
  setPicture: PropTypes.func.isRequired,
};
