import React from 'react';
import PropTypes from 'prop-types';
import './controls.css';
export default function Controls({ handlePause, handlePlay, handleBackWard, handleForWard }) {
  return (
    <div className="flex mx-6 w-6/12">
      <button onClick={handleBackWard}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src="./src/img/backward.svg "
          alt=""
        />
      </button>
      <button onClick={handlePlay}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src="./src/img/play.svg"
          alt=""
        />
      </button>
      <button onClick={handlePause}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src="./src/img/pause.png"
          alt=""
        />
      </button>
      <button onClick={handleForWard}>
        <img
          className="px-1 hover:opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
          src="./src/img/forward.svg"
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
