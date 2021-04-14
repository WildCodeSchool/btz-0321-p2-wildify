import React from 'react';
import { useState, useEffect } from 'react';
import Controls from './controls/controls';
import HiddenPlayer from '../HiddenPlayer/HiddenPlayer';



export default function Playbar({item,audio,setAudio,onListen,setOnListen,handleSong}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPos, setSliderPos] = useState('100');
  const [onPlay, setOnPlay] = useState('');
  const [currentTrack, setCurrentTrack] = useState(9);


  
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
    
    setAudio(false);
  };

  const handlePlay = () => {
    
    setAudio(true);
    audioPlay.play();
  };

  const handleBackWard = () => {
    setCurrentTrack(currentTrack - 1);
    
   
  };

  const handleForWard = () => {
    setCurrentTrack(currentTrack + 1);
   
  };

  useEffect(() => {
    if (audio === true) {
      audioPlay.play();
      
    }
  }, []);

  return (
    <div className="w-2/3 flex-row align-middle justify-center fixed">
      <HiddenPlayer
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        item={item}
        handleSong={handleSong}
        onListen={onListen}
        setOnListen={setOnListen}
      />
      <div className="flex bg-black opacity-80 items-center h-full justify-center rounded-3xl">
        <div className="flex-row flex align-middle justify-center h-full">
          
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
            <div className="text-white">00:00:00</div>
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
