import React from 'react';
import Play from '../../../img/play.svg';
import Pause from '../../../img/pause.png';
import Backward from '../../../img/backward.svg';
import Forward from '../../../img/forward.svg';

import PropTypes from 'prop-types';
export default function Controls({ handlePause, handlePlay, handleBackWard, handleForWard }) {
  const controlsButtons = {
    play: Play,
    pause: Pause,
    backward: Backward,
    forward: Forward,
  };
  return (
    <div className="flex align-middle justify-center mx-6 w-6/12">
      <button className="outline-none" onClick={handleBackWard}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src={controlsButtons.backward}
          alt=""
        />
      </button>
      <button className="outline-none" onClick={handlePlay}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src={controlsButtons.play}
          alt=""
        />
      </button>
      <button className="outline-none" onClick={handlePause}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src={controlsButtons.pause}
          alt=""
        />
      </button>
      <button className="outline-none" onClick={handleForWard}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src={controlsButtons.forward}
          alt=""
        />
      </button>
    </div>
  );
}

Controls.propTypes = {
  handlePause: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handleBackWard: PropTypes.func.isRequired,
  handleForWard: PropTypes.func.isRequired,
};
