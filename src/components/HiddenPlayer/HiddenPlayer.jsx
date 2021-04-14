import React from 'react';
import PropTypes from 'prop-types';
export default function HiddenPlayer({ onListen, audioRef, updateSong }) {
  const handleClick = () => {
    updateSong();
  };

  return (
    <div>
      <audio id="audio" className="hidden" ref={audioRef} controls>
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
        Your browser does not support this audio format.
      </audio>
      <button onClick={handleClick}>PUT SONG</button>
    </div>
  );
}
HiddenPlayer.propTypes = {
  onListen: PropTypes.string.isRequired,
  audioRef: PropTypes.func.isRequired,
  updateSong: PropTypes.func.isRequired,
};
