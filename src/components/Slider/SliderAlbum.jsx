import React, { useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';
import AlbumTrackList from './AlbumTrackList';

function SliderAlbum({ albums }) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [isTrackList, setIsTrackList] = useState(false);

  const handleClick = () => {
    if (isTrackList) {
      setIsTrackList(false);
    } else {
      setIsTrackList(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col align-middle justify-center items-center">
      <Previous className="" width={width} albums={albums} index={index} setIndex={setIndex} />
      <Next className="" width={width} albums={albums} index={index} setIndex={setIndex} />
      {!isTrackList ? <Slider handleClick={handleClick} width={width} albums={albums} index={index} /> : <AlbumTrackList handleClick={handleClick} />}
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
};
