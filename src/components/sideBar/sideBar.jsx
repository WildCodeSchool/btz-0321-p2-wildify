import React from 'react';

function SideBar() {
  return (
    <div className=" sticky flex flex-col  right-0 900:col-start-4 900:col-end-5 900:row-start-1 900:row-span-6 bg-black bg-opacity-30 shadow-sideBar">
      <div className="my-32 flex flex-col justify-center items-center">
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Title">
          Title:
        </label>
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="title"></input>
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Artist">
          Artist:
        </label>
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="Artist"></input>
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Album">
          Album:
        </label>
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="Album"></input>
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Picture">
          Picture:
        </label>
        <input className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="Picture"></input>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="playlist">
          Playlist:
        </label>
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
      <div className="my-40 w-full flex flex-col items-center align-middle justify-center">
        <label className="text-white text-lg cursor-pointer" htmlFor="upload">
          Upload Song:
        </label>
        <input className="w-3/4 bg-black cursor-pointer text-white opacity-30 rounded-4xl my-4" type="file" id="upload" name="upload" />
      </div>
    </div>
  );
}

export default SideBar;
