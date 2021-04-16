import React from 'react';
import PlaylistOnclick from './playlistOnclick';

function ListPlaylistOnClick() {
  const title = {
    title1: 'Check It Out',
  };
  const Artist = {
    name: 'AlphaWann',
  };

  const album = {
    albm: 'PlayTime',
  };

  return (
    <div className="p-5">
      <h1 className="text-white font-scada text-3xl font-bold">PlaylistName</h1>
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
      <PlaylistOnclick title={title.title1} Artist={Artist.name} album={album.albm} />
    </div>
  );
}

export default ListPlaylistOnClick;
