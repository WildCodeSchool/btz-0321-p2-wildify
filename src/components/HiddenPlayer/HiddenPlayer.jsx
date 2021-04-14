import React from 'react';

import { useRef } from 'react';

export default function HiddenPlayer(props) {
  const { onListen } = props;
  const { setOnListen } = props;
  const { item } = props;
  const { currentTrack } = props;

  const audioRef = useRef();

  const updateSong = (source) => {
    setOnListen(item[currentTrack].s3_link);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
      audioRef.current.pause()
    }
    console.log(currentTrack);
  };

  const handleClick = () => {
    updateSong();
  };

  
  console.log(onListen);
  return (
    <div>
      <audio id="audio" className="hidden" ref={audioRef} controls>
        <source src={onListen} type="audio/mp3"></source>
        Your browser does not support this audio format.
      </audio>
      <button onClick={handleClick}>PUT SONG</button>
    </div>
  );
}
