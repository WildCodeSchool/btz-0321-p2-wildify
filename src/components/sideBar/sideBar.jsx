import React from 'react';

function SideBar() {
  return (
    <div className=" sticky flex flex-col  right-0 900:col-start-4 900:col-end-5 900:row-start-1 900:row-span-6 bg-black bg-opacity-30 shadow-sideBar">
      <div className="my-32 flex flex-col justify-center items-center ">
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4"></input>
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4"></input>
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4"></input>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <select className="w-3/4 bg-black opacity-30 rounded-4xl" name="playlist" id="">
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="1">
            Playlist 1
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="2">
            Playlist 2
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="3">
            Playlist 3
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="4">
            Playlist 4
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="5">
            Playlist 5
          </option>
        </select>
      </div>
    </div>
  );
}

export default SideBar;
