import React, { useState } from 'react';
import ListPlaylist from './listPlaylist';
import PlaylistOnclick from './playlistOnclick';

function PlaylistSwitch() {
  const [change, setChange] = useState(false);

  return <div>{change ? <PlaylistOnclick /> : <ListPlaylist change={change} setChange={setChange} />}</div>;
}

export default PlaylistSwitch;
