import React, { useState } from 'react';
import ListPlaylist from './listPlaylist';
import ListPlaylistOnClick from './listPlaylistOnClick';
import PropTypes from 'prop-types';

function PlaylistSwitch({ item, setCurrentTrack }) {
  const [ischange, setIsChange] = useState(true);
  const handleClick = () => {
    setIsChange(false);
  };

  const ReturnBtn = () => {
    setIsChange(true);
  };

  return (
    <div>
      <div>
        {ischange ? (
          <ListPlaylist setIsChange={handleClick} />
        ) : (
          <ListPlaylistOnClick item={item} setIsChange={ReturnBtn} setCurrentTrack={setCurrentTrack} />
        )}
      </div>
      ;
    </div>
  );
}

export default PlaylistSwitch;

PlaylistSwitch.propTypes = {
  item: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
