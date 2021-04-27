import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/controls';
import HiddenPlayer from '../HiddenPlayer/HiddenPlayer';
import Volume from '../../img/volume.svg';
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
  isPlaySwitch,
  setIsPlaySwitch,
  selectedSong,
  isAlbum,
}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPos, setSliderPos] = useState('100');
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const audioRef = useRef(null);

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
    updateSong();
  }, [currentTrack]);

  const secondsToHms = (d) => {
    d = Number(d);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    return m + ':' + s;
  };

  const updateSong = () => {
    if (isAlbum) {
      setOnListen(selectedSong[0].s3_link);

      setTitle(selectedSong[0].title);
      setArtist(selectedSong[0].artist.name);
      setAlbum(selectedSong[0].album.title);
      setPicture(selectedSong[0].album.picture);
    } else {
      setOnListen(item[currentTrack].s3_link);

      setTitle(item[currentTrack].title);
      setArtist(item[currentTrack].artist.name);
      setAlbum(item[currentTrack].album.title);
      setPicture(item[currentTrack].album.picture);
    }
    if (audioRef.current) {
      audioRef.current.load();
    }
    if (audio === true) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    updateSong();
  }, [selectedSong]);

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
    setIsPlaySwitch(true);
  };

  const handlePlay = () => {
    setAudio(true);
    setIsPlaySwitch(false);
    audioRef.current.play();
  };

  const handleBackWard = () => {
    if (currentTrack === 0) {
      setCurrentTrack(item.length - 1);
      audioRef.current.pause();
      setAudio(true);
      updateSong();
      handlePlay();
    } else {
      audioRef.current.pause();
      setAudio(true);
      setCurrentTrack((currentTrack -= 1));
      updateSong();
      handlePlay();
    }
  };

  const handleForWard = () => {
    if (currentTrack === item.length - 1) {
      setCurrentTrack(0);
      updateSong();
    } else {
      setCurrentTrack((currentTrack += 1));
      updateSong();
    }
  };

  return (
    <div className="w-pbar max-h-40 flex-row fixed bottom-1 left-3 z-50">
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
        className="flex 
       bg-bgPlaybar  items-center h-20 rounded-4xl shadow-playbar mb-1">
        <div className=" flex-row w-2/5 flex h-full items-center ">
          <div
            className="w-16 h-16 ml-4 mr-4 rounded-full shadow-ImgPlaybar"
            style={{
              backgroundImage: `url(${picture})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}></div>
          <div className="flex-col w-4/5 flex justify-start items-left ">
            <div className="text-white font-scada text-lg font-bold">{title}</div>
            <div className="text-white font-cuprum text-sm">
              {album} - {artist}
            </div>
          </div>
        </div>
        <div className="w-8/12 flex align-middle item-center justify-center mr-3">
          <div className="w-4/5 mr-6 h-full flex align-middle item-center justify-center">
            <div className=" flex px-1 mx-2 mt-2 text-xs align-middle font-Cuprum text-white">{audio ? secondsToHms(currentTime) : '00:00'}</div>
            <div className="w-4/5">
              <div className="w-full">
                <div className="endTime"></div>
                <input
                  onChange={positionChange}
                  type="range"
                  min="0"
                  max={duration}
                  value={sliderValue}
                  className=" h-1.5 bg-white rounded slider"
                  id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
            <div className="text-white text-xs mt-2 font-Cuprum mx-2">{audio ? secondsToHms(duration - currentTime) : '00:00'}</div>
          </div>
          <Controls
            handlePlay={handlePlay}
            handlePause={handlePause}
            handleBackWard={handleBackWard}
            handleForWard={handleForWard}
            isPlaySwitch={isPlaySwitch}
          />
          <div className="ml-6 mr-3 flex-col align-middle w-5/12">
            <div className="flex h-full w-full align-middle justify-center items-center">
              <div className="h-full mr-2">
                <img className="w-full" src={Volume} alt="" />
              </div>
              <div className="h-full  w-full">
                <div className="endTime"></div>
                <input
                  onChange={volumeChange}
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  className="w-11/12 h-1.5 rounded slider"
                  id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
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
  picture: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  title: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
  setArtist: PropTypes.func.isRequired,
  setAlbum: PropTypes.func.isRequired,
  setPicture: PropTypes.func.isRequired,
  isPlaySwitch: PropTypes.bool,
  setIsPlaySwitch: PropTypes.func,
  selectedSong: PropTypes.array,
  isAlbum: PropTypes.bool.isRequired,
};
