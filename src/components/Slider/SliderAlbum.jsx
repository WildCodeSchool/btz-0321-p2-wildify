import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function SliderAlbum({ item }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-44 h-56 rounded-3xl shadow-lg bg-black">
      <Previous className="" item={item} index={index} setIndex={setIndex} />
      <div className="w-44 h-44 overflow-hidden">
        <Slider className="" item={item} index={index} />
      </div>
      <Next className="" item={item} index={index} setIndex={setIndex} />
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  item: PropTypes.array.isRequired,
};
