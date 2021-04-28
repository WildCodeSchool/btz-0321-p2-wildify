import React from 'react';
import AdminPlayer from '../AdminPlayer/AdminPlayer';
import UpdateSongs from './UpdateSongs/UpdateSongs';
import UploadSongs from './UploadSongs/UploadSongs';

export default function AdminSongs({ item, artists, albums }) {
  console.log(item);
  return (
    <div className="w-full h-full flex items-center justify-center align-middle text-xs  text-white">
      <div className="w-full h-full grid-rows-2 grid-cols-2 grid">
        <div className="flex justify-center align-middle items-center">
          <UploadSongs />
        </div>
        <div className="flex justify-center align-middle items-center">
          <UpdateSongs item={item} />
        </div>
        <div className="flex justify-center align-middle items-center">
          <AdminPlayer item={item} />
        </div>
        <div className="flex justify-center align-middle items-center">a</div>
      </div>
    </div>
  );
}
