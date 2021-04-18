import React from 'react';
import ListPlaylist from './listPlaylist';
import PlaylistOnclick from './playlistOnclick';
import PropTypes from 'prop-types';

function PlaylistSwitch({ setChange, change }) {
  return <div>{change ? <PlaylistOnclick /> : <ListPlaylist change={change} setChange={setChange} />}</div>;
}

export default PlaylistSwitch;

PlaylistSwitch.propTypes = {
  setChange: PropTypes.bool.isRequired,
  change: PropTypes.bool.isRequired,
};
