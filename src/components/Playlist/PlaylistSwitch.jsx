import React, { useState } from 'react';
import ListPlaylist from './listPlaylist';
import ListPlaylistOnClick from './listPlaylistOnClick';
import PropTypes from 'prop-types';

function PlaylistSwitch({ setCurrentTrack, playLists }) {
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
          <ListPlaylist playLists={playLists} setIsChange={handleClick} />
        ) : (
          <ListPlaylistOnClick playLists={playLists} setIsChange={ReturnBtn} setCurrentTrack={setCurrentTrack} />
        )}
      </div>
    </div>
  );
}

export default PlaylistSwitch;

PlaylistSwitch.propTypes = {
  playLists: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
