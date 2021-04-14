import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/controls';
import HiddenPlayer from '../HiddenPlayer/HiddenPlayer';

export default function Playbar({ item, currentTrack, setCurrentTrack, setAudio, onListen, setOnListen, handleSong }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPos, setSliderPos] = useState('100');
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const [picture, setPicture] = useState();

  const audioRef = useRef(null);

  useEffect(() => {
    let audioTime = document.getElementById('audio');
    const timer = window.setInterval(() => {
      if (audioTime.currentTime > 0) {
        setSliderValue(audioTime.currentTime);
      }
    }, 100);
    return function () {
      clearInterval(timer);
    };
  }, [sliderValue]);

  const updateSong = () => {
    setOnListen(item[currentTrack].s3_link);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
      audioRef.current.pause();
    }
    setTitle(item[currentTrack].title);
    setArtist(item[currentTrack].artist.name);
    setAlbum(item[currentTrack].album.title);
    setPicture(item[currentTrack].album.picture);
  };
  const volumeChange = (e) => {
    setSliderPos(e.target.value);
    audioRef.current.volume = sliderPos / 100;
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
    setCurrentTrack(currentTrack - 1);
    updateSong();
    audioRef.current.play();
  };

  const handleForWard = () => {
    if (currentTrack >= item.length) {
      setAudio(true);
      setCurrentTrack(0);
      updateSong();
      audioRef.current.play();
    } else {
      setAudio(true);
      setCurrentTrack(currentTrack + 1);
      updateSong();
      audioRef.current.play();
    }
  };

  return (
    <div className="w-8/12 flex-row align-middle justify-center fixed bottom-3">
      <HiddenPlayer
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        item={item}
        handleSong={handleSong}
        onListen={onListen}
        setOnListen={setOnListen}
        updateSong={updateSong}
        audioRef={audioRef}
      />

      <div className="flex py-1 bg-opacity-50 bg-black items-center h-full justify-center rounded-3xl ">
        <div className="flex-row w-5/12 flex align-middle justify-center h-full">
          <div className="flex-col  w-2/4 flex items-center justify-around">
            <img className="w-11/12 my-2 rounded-full" src={picture} alt="" />
          </div>
          <div className="flex-col w-2/4 flex items-center justify-between py-8 mx-4">
            <div className="text-white">{title}</div>
            <div className="text-white">{album}</div>
            <div className="text-white">{artist}</div>
          </div>
        </div>
        <div className="flex-col align-middle h-full justify-center  w-8/12">
          <div className="flex h-full w-full">
            <div className="h-full">
              <img src="./src/img/Group 44.png" alt="" />
            </div>
            <div className="h-full w-4/5">
              <div className="endTime"></div>
              <input onChange={volumeChange} type="range" min="0" max="100" value={sliderPos} className="w-11/12 h-0.5" id="myRange"></input>
              <div className="endTime"></div>
            </div>
            <Controls handlePlay={handlePlay} handlePause={handlePause} handleBackWard={handleBackWard} handleForWard={handleForWard} />
          </div>
          <div className="w-full h-full flex item-center justify-center">
            <div className="text-white">00:00:00</div>
            <div className="w-4/5">
              <div className="w-full">
                <div className="endTime"></div>
                <input type="range" min="0" max="300" value={sliderValue} className="w-full h-0.5" id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
            <div className="text-white mx-6">00:00:000</div>
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
};
