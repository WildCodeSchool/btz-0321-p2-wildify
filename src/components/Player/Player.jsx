import React from 'react';
import Controls from '../playbar/controls/controls';
import './Player.css';
export default function Player() {
  return (
    <div className="bg-black absolute flex flex-col  justify-between z-50 align-middle w-full h-full py-20">
      <div className="flex justify-around items-center w-full align-middle px-10">
        <img src="./src/img/Group 44.png" alt="" />
        <input onChange="" type="range" min="0" max="100" value="0" className="w-11/12 h-0.5 slider" id="myRange"></input>
        <img src="./src/img/arrow.svg" alt="" />
      </div>
      <div className="w-full flex align-middle justify-center px-10">
        <img src="./src/img/playbar-miniature.png" alt="" />
      </div>
      <div className="text-white flex w-full align-middle justify-center px-10">
        <div>Jsan-Chinese food (ft lindécis Pandrezz) Ambition</div>
      </div>
      <div className="w-full flex align-middle items-center justify-center px-10">
        <Controls />
      </div>
      <div className="w-full flex align-middle items-center justify-center px-10">
        <input onChange="" type="range" min="0" max="100" value="0" className="w-11/12 h-0.5 slider" id="myRange"></input>
      </div>
    </div>
  );
}
