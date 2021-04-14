import React from 'react';

export default function Controls({ handlePause, handlePlay, handleBackWard, handleForWard }) {
  return (
    <div className="flex">
      <button onClick={handleBackWard}>
        <img className="px-1" src="./src/img/backward.svg" alt="" />
      </button>
      <button onClick={handlePlay}>
        <img className="px-1" src="./src/img/play.svg" alt="" />
      </button>
      <button onClick={handlePause}>
        <img className="px-1" src="./src/img/pause.png" alt="" />
      </button>
      <button onClick={handleForWard}>
        <img className="px-1" src="./src/img/forward.svg" alt="" />
      </button>
    </div>
  );
}
