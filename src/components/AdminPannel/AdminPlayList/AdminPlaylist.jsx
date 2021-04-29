import React from 'react';

export default function AdminPlaylist() {
  return (
    <div className="text-white w-full h-full flex flex-col items-center align-middle justify-center">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <div className="flex flex-col items-center justify-center align-middle">
          <label htmlFor="">Create PlayList : </label>
          <input type="text" className="bg-black opacity-50" placeholder="PlayList Title" />
          <input type="text" className="bg-black opacity-50" placeholder="PlayList Description" />
          <input type="text" className="bg-black opacity-50" placeholder="PlayList Picture URL" />
          <button className="bg-black opacity-50">SUBMIT PLAYLIST</button>
        </div>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
      </div>
    </div>
  );
}
