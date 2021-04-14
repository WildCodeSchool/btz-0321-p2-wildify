import React from 'react';
import { useState, useEffect } from 'react';

import Controls from './controls/controls';
import moment from 'moment';
import HiddenPlayer from '../HiddenPlayer/HiddenPlayer';

export default function Playbar(props) {
  const [playBarClass, setPlayBarClass] = useState('playBar full');
  const [sliderValue, setSliderValue] = useState(0);
  const [imageClass, setImageClass] = useState('playBar-main');
  const [sliderPos, setSliderPos] = useState('100');
  const [index, setIndex] = useState('0');
  const [onPlay, setOnPlay] = useState('');
  const [picture, setPicture] = useState('');
  const [currentTrack, setCurrentTrack] = useState(9);

  const { item } = props; // object with api response Insisde.
  const { audio } = props;
  const { setAudio } = props;
  const { onListen } = props;
  const { setOnListen } = props;
  const { handleSong } = props;

  //timer convert
  let x = sliderValue * 100000;
  x = x.toFixed(2);
  let d = moment.duration(x, 'milliseconds');
  let hours = Math.floor(d.asHours());
  let mins = Math.floor(d.asMinutes() * 0.01) * 1;
  let seconds = Math.floor(d.asSeconds());
  let timeSong = mins + ':' + Math.floor(seconds / 100) * 1;

  const volumeChange = (e) => {
    setSliderPos(e.target.value);
    document.getElementById('audio').volume = sliderPos / 100;
  };

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

  const audioPlay = document.getElementById('audio');

  const handlePause = () => {
    audioPlay.pause();
    console.log('pause');
    setAudio(false);
  };

  const handlePlay = () => {
    console.log('play');
    setAudio(true);
    setOnPlay(item[3].s3_link);
    audioPlay.play();
  };

  const handleBackWard = () => {
    setCurrentTrack(currentTrack - 1);
    console.log(currentTrack);
  };

  const handleForWard = () => {
    setCurrentTrack(currentTrack + 1);
  };

  useEffect(() => {
    if (audio === true) {
      audioPlay.play();
      console.log('use');
      console.log(audioPlay);
    }
  }, []);

  console.log(onListen);
  return (
    <div className="w-2/3 flex-row align-middle justify-center fixed ">
      <HiddenPlayer
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        item={item}
        handleSong={handleSong}
        onListen={onListen}
        setOnListen={setOnListen}
      />
      <div className="flex bg-red-500 items-center h-full justify-center">
        <div className="flex-row flex align-middle justify-center h-full">
          <img id="arrow" src="./src/img/arrow.svg" alt="" />
          <div className="miniature">
            <img src="./src/img/playbar-miniature.png" alt="" />
          </div>
          <div className="song-info">
            <div className="text-white">{currentTrack}</div>
            <div className="text-white">l'indécis</div>
            <div className="text-white">Soulful</div>
          </div>
        </div>
        <div className="flex-col align-middle justify-center h-full w-8/12">
          <div className="flex h-3/6 w-full">
            <div className="volumeLevel">
              <img src="./src/img/Group 44.png" alt="" />
            </div>
            <div className="w-4/5">
              <div className="endTime"></div>
              <input onChange={volumeChange} type="range" min="0" max="100" value={sliderPos} className="w-11/12 h-0.5" id="myRange"></input>
              <div className="endTime"></div>
            </div>
            <Controls handlePlay={handlePlay} handlePause={handlePause} handleBackWard={handleBackWard} handleForWard={handleForWard} />
          </div>
          <div className="w-full flex">
            <div className="text-white">{timeSong}</div>
            <div className="w-4/5">
              <div className="w-full">
                <div className="endTime"></div>
                <input type="range" min="0" max="300" value={sliderValue} className="w-full h-0.5" id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
            <div className="text-white">00:00:000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
