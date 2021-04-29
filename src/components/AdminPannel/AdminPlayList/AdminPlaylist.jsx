import React from 'react';

export default function AdminPlaylist({ playList }) {
  return (
    <div className="text-white w-full h-full flex flex-col items-center align-middle justify-center">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <div className="flex flex-col items-center justify-center align-middle">
          <label htmlFor="">Create PlayList : </label>
          <input type="text" className="bg-black opacity-50 rounded-xl  my-2" placeholder="PlayList Title" />
          <input type="text" className="bg-black opacity-50 rounded-xl  my-2" placeholder="PlayList Description" />
          <input type="text" className="bg-black opacity-50 rounded-xl  my-2" placeholder="PlayList Picture URL" />
          <button className="bg-black opacity-50 rounded-xl border-2 border-<hite py-2 px-4">SUBMIT PLAYLIST</button>
        </div>
        <div className="flex flex-col items-center justify-center align-middle">
          <label htmlFor="">Update PlayList :</label>
          <select name="" id="" className="bg-black opacity-50">
            {playList.map((playList, index) => {
              return (
                <option key={index} value="">
                  {playList.title}
                </option>
              );
            })}
          </select>
          <input type="text" placeholder="PlayList Title" className="bg-black opacity-50 rounded-xl my-2" />
          <input type="text" placeholder="PlayList Description" className="bg-black opacity-50 rounded-xl my-2" />
          <input type="text" placeholder="PlayList Picture URL" className="bg-black opacity-50 rounded-xl my-2" />
        </div>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
      </div>
    </div>
  );
}
