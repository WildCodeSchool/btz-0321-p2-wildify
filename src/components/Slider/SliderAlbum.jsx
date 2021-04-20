import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function SliderAlbum({ albums }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-full">
      <Previous className="" albums={albums} index={index} setIndex={setIndex} />

      <Slider className="overflow-hidden" albums={albums} index={index} />

      <Next className="" albums={albums} index={index} setIndex={setIndex} />
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
};
