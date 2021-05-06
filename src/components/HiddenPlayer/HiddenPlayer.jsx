import React from 'react';
import PropTypes from 'prop-types';
export default function HiddenPlayer({ handleForWard, onListen, audioRef }) {
  return (
    <div>
      <audio id="audio" className="hidden" onEnded={handleForWard} ref={audioRef} controls>
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
        Your browser does not support this audio format.
      </audio>
    </div>
  );
}

HiddenPlayer.propTypes = {
  onListen: PropTypes.string,
  audioRef: PropTypes.object.isRequired,
  handleForWard: PropTypes.func.isRequired,
};
