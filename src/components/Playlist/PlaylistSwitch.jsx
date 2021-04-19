import React, { useState } from 'react';
import ListPlaylist from './listPlaylist';
import ListPlaylistOnClick from './listPlaylistOnClick';
import PropTypes from 'prop-types';

function PlaylistSwitch({ item, setOnListen }) {
  const [ischange, setIsChange] = useState(true);

  const handleClick = () => {
    setIsChange(false);
  };

  return (
    <div>
      {ischange ? (
        <ListPlaylist setIsChange={handleClick} setOnListen={setOnListen} />
      ) : (
        <ListPlaylistOnClick item={item} setIsChange={handleClick} />
      )}
    </div>
  );
}

export default PlaylistSwitch;

PlaylistSwitch.propTypes = {
  item: PropTypes.array.isRequired,
  setOnListen: PropTypes.func.isRequired,
  currentTrack: PropTypes.string.isRequired,
  setIsChange: PropTypes.func.isRequired,
};
