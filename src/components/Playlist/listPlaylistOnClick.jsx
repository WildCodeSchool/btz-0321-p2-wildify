import React from 'react';
import PlaylistOnclick from './playlistOnclick';
import PropTypes from 'prop-types';

function ListPlaylistOnClick({ item }) {
  const musicListener = item.map((music, key) => (
    <PlaylistOnclick key={key} title={music.title} Artist={music.artist.name} img={music.album.picture} />
  ));

  return (
    <div className="overflow-y-auto p-7 ">
      <h1 className="text-white font-scada text-3xl font-bold mb-2">PlaylistName</h1>
      {musicListener}
    </div>
  );
}

export default ListPlaylistOnClick;

ListPlaylistOnClick.propTypes = {
  item: PropTypes.array.isrequired,
};
