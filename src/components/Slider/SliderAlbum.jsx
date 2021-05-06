import React, { useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import PropTypes from 'prop-types';
import Slider from './Slider';
import Next from './Next';
import Previous from './Previous';
import AlbumTrackList from './AlbumTrackList';
import './scrollbarwebkit.css';
function SliderAlbum({ albums, item, setCurrentTrack, setSelectedSong, setIsAlbum, isAlbum }) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [isTrackList, setIsTrackList] = useState(false);
  const [albumChoice, setAlbumChoice] = useState(albums[0].title);

  const handleClick = () => {
    if (isAlbum) {
      setIsAlbum(false);
    } else {
      setIsAlbum(true);
    }
    if (isTrackList) {
      setIsTrackList(false);
    } else {
      setIsTrackList(true);
    }
  };
  return (
    <div className="w-full h-full flex flex-col align-middle items-end">
      {!isTrackList ? (
        <div className="w-full h-full flex flex-col align-middle justify-center items-center">
          <Previous className="" width={width} albums={albums} index={index} setIndex={setIndex} setAlbumChoice={setAlbumChoice} />
          <Next className="" width={width} albums={albums} index={index} setIndex={setIndex} setAlbumChoice={setAlbumChoice} />
          <Slider handleClick={handleClick} width={width} albums={albums} index={index} />
        </div>
      ) : (
        <div className="overflow-y-auto sidebar w-full">
          <AlbumTrackList
            albumChoice={albumChoice}
            handleClick={handleClick}
            albums={albums}
            index={index}
            item={item}
            width={width}
            setCurrentTrack={setCurrentTrack}
            setSelectedSong={setSelectedSong}
            setIsAlbum={setIsAlbum}
          />
        </div>
      )}
    </div>
  );
}

export default SliderAlbum;

SliderAlbum.propTypes = {
  albums: PropTypes.array.isRequired,
  item: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setIsAlbum: PropTypes.func.isRequired,
  isAlbum: PropTypes.bool.isRequired,
};
