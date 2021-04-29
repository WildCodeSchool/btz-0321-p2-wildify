import React, { useState } from 'react';

export default function UpdateSongs({ item }) {
  return (
    <div className="flex flex-col  items-center align-middle justify-center w-full">
      <label htmlFor="">Update :</label>
      <select className="w-4/5 my-2 h-6 text-white rounded-xl px-4 bg-black bg-opacity-50" name="" id="">
        {item.map((song, index) => {
          return <option key={index}>{song.title}</option>;
        })}
      </select>
      <input className="w-4/5 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl" type="text" placeholder="Track Title" />
      <input className="w-4/5 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl" type="text" placeholder="Track Duration" />
      <input className="w-4/5 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl" type="text" placeholder="Track Picture" />
      <input className="w-4/5 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl" type="text" placeholder="Track Album" />
      <input className="w-4/5 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl" type="text" placeholder="Track Artist" />
      <button className="border-2 border-white px-4 py-2 rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600">SUBMIT</button>
    </div>
  );
}
