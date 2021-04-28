import React from 'react';

export default function UploadSongs() {
  return (
    <div className="w-full h-full flex-col flex items-center align-middle justify-center">
      <label htmlFor="">Upload :</label>
      <input className="my-6 w-2/6 bg-gray-700" type="file" />
      <input className="my-6 w-2/6 bg-gray-700" type="text" placeholder="Picture URL" />
      <select className="my-6 w-2/6 bg-gray-700" name="" id="">
        <option value="">Playlist</option>
        <option value="">Playlist</option>
        <option value="">Playlist</option>
        <option value="">Playlist</option>
      </select>
    </div>
  );
}
