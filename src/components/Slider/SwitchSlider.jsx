import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import AlbumTrackList from './AlbumTrackList';

function SwitchSlider({ item }) {
  const [switchChange, setSwitchChange] = useState();

  const switchClick = () => {
    setSwitchChange(false);
  };

  const switchBack = () => {
    setSwitchChange(true);
  };

  return switchChange ? <Slider setSwitchChange={switchClick} /> : <AlbumTrackList setSwitchChange={switchBack} item={item} />;
}
export default SwitchSlider;

SwitchSlider.propTypes = {
  item: PropTypes.array.isRequired,
};
