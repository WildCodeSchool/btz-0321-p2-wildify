import React, { useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import PropTypes from 'prop-types';
import SliderA from './SliderA';
import NextA from './NextA';
import PreviousA from './PreviousA';
import ArtistTrackList from './ArtistTrackList';
import './scrollbarwebkit.css';

function SliderArtist({ artists, item, setCurrentTrack, setSelectedSong, setIsArtist, isArtist }) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [isTrackList, setIsTrackList] = useState(false);
  const [artistChoice, setArtistChoice] = useState(artists[0].name);

  const handleClick = () => {
    if (isArtist) {
      setIsArtist(false);
    } else {
      setIsArtist(true);
    }
    if (isTrackList) {
      setIsTrackList(false);
    } else {
      setIsTrackList(true);
    }
  };
  return (
    <div className="w-full  h-full flex flex-col">
      {!isTrackList ? (
        <div className="w-full h-full  flex flex-col align-middle justify-center items-center">
          <PreviousA className="" width={width} artists={artists} index={index} setIndex={setIndex} setArtistChoice={setArtistChoice} />
          <NextA className="" width={width} artists={artists} index={index} setIndex={setIndex} setArtistChoice={setArtistChoice} />
          <SliderA handleClick={handleClick} width={width} artists={artists} index={index} />
        </div>
      ) : (
        <div className="overflow-y-auto sidebar w-full">
          <ArtistTrackList
            artistChoice={artistChoice}
            handleClick={handleClick}
            artists={artists}
            index={index}
            item={item}
            width={width}
            setCurrentTrack={setCurrentTrack}
            setSelectedSong={setSelectedSong}
            setIsArtist={setIsArtist}
          />
        </div>
      )}
    </div>
  );
}

export default SliderArtist;

SliderArtist.propTypes = {
  artists: PropTypes.array.isRequired,
  item: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setIsArtist: PropTypes.func.isRequired,
  isArtist: PropTypes.bool.isRequired,
};
