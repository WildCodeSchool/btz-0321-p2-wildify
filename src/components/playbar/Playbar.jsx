import React from "react";
import { useState, useEffect } from "react";
import "./Playbar.css";
import Controls from "./controls/controls";
import OnListen from "../../feature/apicall/OnListen";

export default function Playbar() {


  const [playBarClass, setPlayBarClass] = useState("playBar full");
  const [sliderValue, setSliderValue] = useState("0");
  const [imageClass, setImageClass] = useState("playBar-main");
  const [sliderPos, setSliderPos] = useState("100");
  const [audio, setAudio] = useState();
  const [date, setDate] = useState(new Date());
  
  const handleClick = () => {
    if (playBarClass === "playBar") {
      setPlayBarClass("playBar full");
    } else {
      setPlayBarClass("playBar");
    }
    

    if (imageClass == "playBar-main") {
      setImageClass("playBar-main");
    } else {
      setImageClass("playBar-main");
    }

  
  };

  const handleChange = (e) =>{
    let slider = document.getElementById("myRange");
    setSliderPos(slider.value)
    let audio2 = document.getElementById("audio")
    console.log(e.target.value)
    setAudio(e.target.value)
    console.log(audio)
    document.getElementById("audio").volume = e.target.value / 100;
  
  }

  
  useEffect(() => {
    let audioTime = document.getElementById("audio");
    let slider = document.getElementById("myRange");
   
   
    window.setInterval(()=>{
      
      setSliderValue(audioTime.currentTime)
      
    },1)


  },[]);

  return (
    <div className={playBarClass}>
      <OnListen />
      <div className={imageClass}>
        <div className="fullPic">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
            alt=""
          />

          <audio id="audio" className="hidden" controls>
            <source
              src="https://bazify.s3.eu-west-3.amazonaws.com/Alpha-Wann/Dondada-mixtape/Farenheit-451.mp3"
              type="audio/mpeg"
            ></source>
            Your browser does not support this audio format.
          </audio>
        </div>
      </div>

      <div className="controls-div">
        <img
          id="arrow"
          onClick={handleClick}
          
          src="./src/img/arrow.svg"
          alt=""
        />

        <div className="left">
          <div className="miniature">
            <img src="./src/img/playbar-miniature.png" alt="" />
          </div>
          <div className="song-info">
            <div className="nameSong">J'san chineese Foof</div>
            <div className="artist">l'indécis</div>
            <div className="album">Ta soeur</div>
          </div>
        </div>
        <div className="right">
          <div className="up">
            <div className="volumeLevel">
              <img src="./src/img/Group 44.png" alt="" />
            </div>
            <div className="volumeSlider">
              <div className="endTime"></div>
              <input onChange={handleChange}
              
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                className="slider"
                id="myRange"
              ></input>
              <div className="endTime"></div>
            </div>
            <Controls />
          </div>
          <div className="down">
            <div className="currentTime">{Math.floor(sliderValue)}</div>
            <div className="bufferSlider">
              <div className="slidecontainer">
                <div className="endTime"></div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  onClick={() => setSliderPos(()=>{
                    let slider = document.getElementById("myRange");
                    setSliderValue(slider.value)
                  })}
                  
                  value={sliderValue}
                  className="slider"
                  id="myRange"
                ></input>
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
