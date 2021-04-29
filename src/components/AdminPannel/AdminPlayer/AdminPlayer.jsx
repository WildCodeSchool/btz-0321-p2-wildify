import React, { useRef, useState, useEffect } from 'react';

export default function AdminPlayer({ item }) {
  const audioRef = useRef(null);

  const [onListen, setOnlisten] = useState();

  const updateSong = () => {
    audioRef.current.load();
    console.log(audioRef.current);
  };

  const handleChange = (e) => {
    setOnlisten(e.target.value);
  };

  useEffect(() => {
    updateSong();
  }, [onListen]);

  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <h1>Track Preview (API RESULTS ):</h1>
      <select onChange={handleChange} name="Track" className="text-white bg-black bg-opacity-50 my-4 h-11 w-48 rounded-xl " id="">
        {item.map((song, index) => {
          return (
            <option key={index} value={song.s3_link}>
              {song.title}
            </option>
          );
        })}
      </select>
      <audio id="audio" ref={audioRef} controls>
        <source src={onListen} type="audio/mp3"></source>
        <track default kind="captions" />
      </audio>
    </div>
  );
}
