import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function SliderAlbum({ albums }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Previous className="" albums={albums} index={index} setIndex={setIndex} />
      <div className="w-full h-full rounded-3xl shadow-lg bg-black">
        <Slider className="w-full h-full overflow-hidden" albums={albums} index={index} />
      </div>

      <Next className="" albums={albums} index={index} setIndex={setIndex} />
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
};
