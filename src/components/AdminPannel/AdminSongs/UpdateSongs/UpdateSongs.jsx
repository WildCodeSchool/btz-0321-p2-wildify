import React, { useState } from 'react';

export default function UpdateSongs({ item }) {
  return (
    <div className="flex flex-col  items-center align-middle justify-center w-full">
      <label htmlFor="">Update :</label>
      <select className="w-2/6 my-2 text-white bg-black bg-opacity-50" name="" id="">
        {item.map((song, index) => {
          return <option key={index}>{song.title}</option>;
        })}
      </select>
      <input className="w-2/6 my-2 text-white bg-black bg-opacity-50" type="text" placeholder="Track Title" />
      <input className="w-2/6 my-2 text-white bg-black bg-opacity-50" type="text" placeholder="Track Duration" />
      <input className="w-2/6 my-2 text-white bg-black bg-opacity-50" type="text" placeholder="Track Picture" />
      <input className="w-2/6 my-2 text-white bg-black bg-opacity-50" type="text" placeholder="Track Album" />
      <input className="w-2/6 my-2 text-white bg-black bg-opacity-50" type="text" placeholder="Track Artist" />
      <button className="text-white">SUBMIT</button>
    </div>
  );
}
