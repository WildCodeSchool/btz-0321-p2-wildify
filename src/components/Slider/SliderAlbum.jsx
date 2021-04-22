import React, { useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';
import AlbumTrackList from './AlbumTrackList';

function SliderAlbum({ albums, item }) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [isTrackList, setIsTrackList] = useState(false);
  const [albumChoice, setAlbumChoice] = useState('');

  const handleClick = () => {
    if (isTrackList) {
      setIsTrackList(false);
    } else {
      setIsTrackList(true);
    }
  };
  return (
    <div className="w-full h-full flex flex-col align-middle justify-center items-center">
      {!isTrackList ? (
        <div className="w-full h-full flex flex-col align-middle justify-center items-center">
          <Previous className="" width={width} albums={albums} index={index} setIndex={setIndex} setAlbumChoice={setAlbumChoice} />
          <Next className="" width={width} albums={albums} index={index} setIndex={setIndex} setAlbumChoice={setAlbumChoice} />
          <Slider handleClick={handleClick} width={width} albums={albums} index={index} />
        </div>
      ) : (
        <AlbumTrackList albumChoice={albumChoice} handleClick={handleClick} albums={albums} index={index} item={item} />
      )}
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
  item: PropTypes.array.isRequired,
};
