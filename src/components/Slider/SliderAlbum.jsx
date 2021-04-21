import React, { useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';

function SliderAlbum({ albums }) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-full flex flex-col align-middle justify-center items-center">
      <Previous className="" width={width} albums={albums} index={index} setIndex={setIndex} />
      <Next className="" width={width} albums={albums} index={index} setIndex={setIndex} />
      <Slider className="" width={width} albums={albums} index={index} />
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
};
