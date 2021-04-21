import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function SliderAlbum({ albums }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-full">
      <Slider className="" albums={albums} index={index} />
      <Previous className="left-1/2" albums={albums} index={index} setIndex={setIndex} />
      <Next className="bottom-0" albums={albums} index={index} setIndex={setIndex} />
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
};
