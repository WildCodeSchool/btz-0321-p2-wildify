import React, { useState } from 'react';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function Sliderartist() {
  const [index, setIndex] = useState(0);
  const [songs, setSongs] = useState([]);

  fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs')
    .then((res) => res.json())
    .then((result) => setSongs(result));

  return (
    <div>
      <div className="w-40 h-56 top-0 left-0 overflow-hidden rounded-3xl shadow-lg">
        <button
          className="w-40 top-0 left-0 z-50 relative text-black cursor-pointer focus:outline-none"
          onClick={() => setIndex(index == 0 ? songs.length - 1 : index - 1)}>
          <Previous />
        </button>
        <Slider songs={songs} index={index} />
        <button
          className="w-40 top-0 left-0 z-50 relative text-black cursor-pointer focus:outline-none bg-transparent"
          onClick={() => setIndex(index == songs.length - 1 ? 0 : index + 1)}>
          <Next />
        </button>
      </div>
    </div>
  );
}

export default Sliderartist;
