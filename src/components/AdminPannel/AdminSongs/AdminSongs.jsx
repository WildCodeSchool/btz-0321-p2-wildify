import React from 'react';
import AdminPlayer from '../AdminPlayer/AdminPlayer';
import UpdateSongs from './UpdateSongs/UpdateSongs';
import UploadSongs from './UploadSongs/UploadSongs';

export default function AdminSongs({ item, artists, albums }) {
  console.log(item);
  return (
    <div className="w-full h-full flex items-center justify-center align-middle text-xs  border-white  text-white">
      <div className="w-full h-full grid-rows-2 grid-cols-2 grid">
        <div className="flex justify-center align-middle items-center  border-white">
          <UploadSongs />
        </div>
        <div className="flex justify-center align-middle items-center  border-white">
          <UpdateSongs item={item} />
        </div>
        <div className="flex justify-center align-middle items-center  border-white">
          <AdminPlayer item={item} />
        </div>
        <div className="flex justify-center align-middle items-center  border-white">UPLOAD ALBUM/ARTIST PICTURE</div>
      </div>
    </div>
  );
}
