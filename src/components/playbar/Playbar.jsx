import React from 'react';
import { useState, useEffect } from 'react';
import './Playbar.css';
import Controls from './controls/controls';
import onListen from '../../feature/apicall/OnListen';
import moment from 'moment';

export default function Playbar() {
  const [playBarClass, setPlayBarClass] = useState('playBar full');
  const [sliderValue, setSliderValue] = useState('0');
  const [imageClass, setImageClass] = useState('playBar-main');
  const [sliderPos, setSliderPos] = useState('100');
  const [audio, setAudio] = useState();
  const [rotateClass, setRotateClass] = useState('rotate');

  const [songUrl, setSongUrl] = useState(0);

  let x = sliderValue * 100000;
  x = x.toFixed(2);

  let d = moment.duration(x, 'milliseconds');
  let hours = Math.floor(d.asHours());
  let mins = Math.floor(d.asMinutes() * 0.01) * 1;

  let seconds = Math.floor(d.asSeconds());
  let timeSong = mins + ':' + Math.floor(seconds / 100) * 1;

  const handleClick = () => {
    if (playBarClass === 'playBar') {
      setPlayBarClass('playBar full');
    } else {
      setPlayBarClass('playBar');
    }

    if (imageClass == 'playBar-main') {
      setImageClass('playBar-main');
    } else {
      setImageClass('playBar-main');
    }

    setRotateClass('rotate');
  };

  const handleChange = (e) => {
    let slider = document.getElementById('myRange');
    setSliderPos(slider.value);
    let audio2 = document.getElementById('audio');

    setAudio(e.target.value);

    document.getElementById('audio').volume = e.target.value / 100;
  };

  useEffect(() => {
    let audioTime = document.getElementById('audio');
    let slider = document.getElementById('myRange');

    window.setInterval(() => {
      setSliderValue(audioTime.currentTime);
    }, 1);
  }, []);

 
  return (
    <div className={playBarClass}>
      <div className={imageClass}>
        <div className="fullPic">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
            alt=""
          />

          <audio id="audio" className="hidden" controls>
            <source src="./src/sound/bob.mp3" type="audio/mpeg"></source>
            Your browser does not support this audio format.
          </audio>
        </div>
      </div>

      <div className="controls-div">
        <div className="left">
          <img className={rotateClass} id="arrow" onClick={handleClick} src="./src/img/arrow.svg" alt="" />
          <div className="miniature">
            <img src="./src/img/playbar-miniature.png" alt="" />
          </div>
          <div className="song-info">
            <div className="nameSong">J'san chineese Foof</div>
            <div className="artist">l'indécis</div>
            <div className="album">Soulful</div>
          </div>
        </div>
        <div className="right">
          <div className="up">
            <div className="volumeLevel">
              <img src="./src/img/Group 44.png" alt="" />
            </div>
            <div className="volumeSlider">
              <div className="endTime"></div>
              <input onChange={handleChange} type="range" min="0" max="100" value={sliderPos} className="slider" id="myRange"></input>
              <div className="endTime"></div>
            </div>
            <Controls />
          </div>
          <div className="down">
            <div className="currentTime">{timeSong}</div>
            <div className="bufferSlider">
              <div className="slidecontainer">
                <div className="endTime"></div>
                <input
                  type="range"
                  min="0"
                  max="300"
                  onClick={() =>
                    setSliderPos(() => {
                      let slider = document.getElementById('myRange');
                      setSliderValue(slider.value);
                    })
                  }
                  value={sliderValue}
                  className="slider"
                  id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
            <div className="endTime">00:00:000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
