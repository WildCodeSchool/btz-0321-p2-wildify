import React from 'react';
import { useState, useEffect } from 'react';
import './Playbar.css';
import Controls from './controls/controls';
import fetchAPI from '../../feature/apicall/OnListen';
import moment from 'moment';



export default function Playbar(props) {
  const [playBarClass, setPlayBarClass] = useState('playBar full');
  const [sliderValue, setSliderValue] = useState('0');
  const [imageClass, setImageClass] = useState('playBar-main');
  const [sliderPos, setSliderPos] = useState('100');
  const [audio, setAudio] = useState();
  const [rotateClass, setRotateClass] = useState('rotate');
  
  const [index, setIndex] = useState("0");
  
  let x = sliderValue * 100000;
  x = x.toFixed(2);

  let d = moment.duration(x, 'milliseconds');
  let hours = Math.floor(d.asHours());
  let mins = Math.floor(d.asMinutes() * 0.01) * 1;
  let seconds = Math.floor(d.asSeconds());
  let timeSong = mins + ':' + Math.floor(seconds / 100) * 1;

const myObj={}
  const handleClick = () => {

    if (playBarClass === 'playBar') {
      setPlayBarClass('playBar full');
    } else {
      setPlayBarClass('playBar');
    }
    
    if (imageClass === 'playBar-main'){
      setImageClass('playBar-main');
    } else {
      setImageClass('playBar-main');
    }

    setRotateClass('rotate');
  };
  

  const volumeChange = (e) => {
    setSliderPos(e.target.value);
    document.getElementById('audio').volume = sliderPos / 100;
  }



  useEffect(() => {


    let audioTime = document.getElementById('audio');
    const timer =  window.setInterval(() => {
      setSliderValue(audioTime.currentTime);
    }, 1000);
      return function(){
        clearInterval(timer)
      }

  }, [sliderValue]);

  


useEffect(()=>{
  const myObj = fetchAPI()
  console.log(myObj)
})

 
  return (
    <div className={playBarClass}>
      <div className={imageClass}>
        <div className="fullPic">
          <img
            src=""
            alt=""
          />

          <audio id="audio" className="hidden" controls>
            <source src={"https://bazify.s3.eu-west-3.amazonaws.com/Josman/MYSTR-J.O.%24./F*cked-Up-4.mp3"} type="audio/mpeg"></source>
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
              <input onChange={volumeChange} type="range" min="0" max="100" value={sliderPos} className="slider" id="myRange"></input>
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
