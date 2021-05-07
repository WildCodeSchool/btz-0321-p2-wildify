import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function AdminPlayer({ item }) {
  const audioRef = useRef(null);

  const [onListen, setOnlisten] = useState();

  const updateSong = () => {
    audioRef.current.load();
  };

  const handleChange = (e) => {
    setOnlisten(e.target.value);
  };

  useEffect(() => {
    updateSong();
  }, [onListen]);

  return (
    <div className="flex flex-col">
      <h1 className="text-white font-scada text-2xl font-bold">Track Preview</h1>
      <h2 className=" mt-2 text-white font-scada text-lg">Select track</h2>
      <select onChange={handleChange} name="Track" className="px-3 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2" id="">
        {item.map((song, index) => {
          return (
            <option key={index} value={song.s3_link}>
              {song.title}
            </option>
          );
        })}
      </select>
      <audio id="audio" ref={audioRef} controls className="mt-5 w-full shadow-input2 rounded-3xl">
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
      </audio>
    </div>
  );
}

AdminPlayer.propTypes = {
  item: PropTypes.array.isRequired,
};
