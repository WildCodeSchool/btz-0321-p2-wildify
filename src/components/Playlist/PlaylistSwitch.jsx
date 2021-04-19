import React, { useState } from 'react';
import ListPlaylist from './listPlaylist';
import ListPlaylistOnClick from './listPlaylistOnClick';
import PropTypes from 'prop-types';

function PlaylistSwitch({ item }) {
  const [ischange, setIsChange] = useState(true);
  const handleClick = () => {
    setIsChange(false);
  };

  const ReturnBtn = () => {
    setIsChange(true);
  };

  return (
    <div>
      <div>{ischange ? <ListPlaylist setIsChange={handleClick} /> : <ListPlaylistOnClick item={item} setIsChange={ReturnBtn} />}</div>;
    </div>
  );
}

export default PlaylistSwitch;

PlaylistSwitch.propTypes = {
  item: PropTypes.array.isRequired,
  setOnListen: PropTypes.func.isRequired,
};
