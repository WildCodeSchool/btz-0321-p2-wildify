import React from 'react';
import Controls from '../playbar/controls/controls';

export default function Player() {
  return (
    <div className="bg-black absolute flex flex-col items-center justify-center align-middle w-full h-full">
      <div className="flex justify-center align-middle">
        <img src="./src/img/Group 44.png" alt="" />
        <input type="range" />
        <img src="./src/img/arrow.svg" alt="" />
      </div>
      <div>
        <img src="./src/img/playbar-miniature.png" alt="" />
      </div>
      <div className="text-white">
        <div>Jsan-Chinese food (ft lindécis Pandrezz) Ambition</div>
      </div>
      <div>
        <Controls />
      </div>
      <div>
        <input type="range" />
      </div>
    </div>
  );
}
