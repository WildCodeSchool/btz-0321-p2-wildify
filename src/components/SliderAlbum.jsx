import React, { useState } from 'react';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function SliderAlbum() {
  const [index, setIndex] = useState(0);
  const [songs, setSongs] = useState([]);

  fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs')
    .then((res) => res.json())
    .then((result) => setSongs(result));

  return (
    <div className="w-44 h-56 rounded-3xl shadow-lg bg-black">
      <Previous className="" songs={songs} index={index} setIndex={setIndex} />
      <div className="w-44 h-44 overflow-hidden">
        <Slider className="" songs={songs} index={index} />
      </div>
      <Next className="" songs={songs} index={index} setIndex={setIndex} />
    </div>
  );
}

export default SliderAlbum;
