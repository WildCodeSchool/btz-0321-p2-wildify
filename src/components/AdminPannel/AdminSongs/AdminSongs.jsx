import React, { useContext, useState, useEffect } from 'react';
import AdminPlayer from '../AdminPlayer/AdminPlayer';
import UpdateSongs from './UpdateSongs/UpdateSongs';
import UploadSongs from './UploadSongs/UploadSongs';
import authContext from '../../../context/authContext';

export default function AdminSongs({ item, artists, albums, playList }) {
  const { token } = useContext(authContext);

  return (
    <div className="w-full h-full flex items-center justify-center align-middle text-xs  border-white  text-white">
      <div className="w-full h-full grid-rows-2 grid-cols-2 grid">
        <div className="flex justify-center align-middle items-center py-6  border-white">
          <UploadSongs albums={albums} playList={playList} />
        </div>
        <div className="flex justify-center align-middle items-center py-6  border-white">
          <UpdateSongs item={item} />
        </div>
        <div className="flex justify-center align-middle items-center py-6  border-white">
          <AdminPlayer item={item} />
        </div>
        <div className="flex justify-center align-middle items-center py-6  border-white">UPLOAD ALBUM/ARTIST PICTURE</div>
      </div>
    </div>
  );
}
