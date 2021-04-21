import React from 'react';
import Play from '../../../img/play.svg';
import Pause from '../../../img/pause.png';
import Backward from '../../../img/backward.svg';
import Forward from '../../../img/forward.svg';

import PropTypes from 'prop-types';
export default function Controls({ handlePause, handlePlay, handleBackWard, handleForWard, isPlaySwitch }) {
  const controlsButtons = {
    play: Play,
    pause: Pause,
    backward: Backward,
    forward: Forward,
  };

  return (
    <div className="flex align-middle justify-center w-3/12 min-w-controls-minW">
      <button className="focus:outline-none" onClick={handleBackWard}>
        <img className="px-1 hover:opacity-50" src={controlsButtons.backward} alt="" />
      </button>
      {isPlaySwitch ? (
        <button className="focus:outline-none" onClick={handlePlay}>
          <img className="px-1 hover:opacity-50" src={controlsButtons.play} alt="" />
        </button>
      ) : (
        <button className="focus:outline-none" onClick={handlePause}>
          <img className="px-1 hover:opacity-50" src={controlsButtons.pause} alt="" />
        </button>
      )}
      <button className="focus:outline-none" onClick={handleForWard}>
        <img className="px-1 hover:opacity-50" src={controlsButtons.forward} alt="" />
      </button>
    </div>
  );
}

Controls.propTypes = {
  handlePause: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handleBackWard: PropTypes.func.isRequired,
  handleForWard: PropTypes.func.isRequired,
  playSwitch: PropTypes.bool.isRequired,
};
