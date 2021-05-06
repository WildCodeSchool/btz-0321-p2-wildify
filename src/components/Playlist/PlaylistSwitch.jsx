import React, { useState } from 'react';
import ListPlaylist from './listPlaylist';
import ListPlaylistOnClick from './listPlaylistOnClick';
import PropTypes from 'prop-types';

function PlaylistSwitch({ setCurrentTrack, playLists }) {
  const [ischange, setIsChange] = useState(true);
  const [playlistChoice, setPlaylistChoice] = useState('');

  const handleClick = (e) => {
    setIsChange(false);
    setPlaylistChoice(e.target.value);
  };

  const Return = () => {
    setIsChange(true);
  };

  return (
    <div>
      <div>
        {ischange ? (
          <ListPlaylist playLists={playLists} handleClick={handleClick} />
        ) : (
          <ListPlaylistOnClick playLists={playLists} playlistChoice={playlistChoice} Return={Return} setCurrentTrack={setCurrentTrack} />
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
