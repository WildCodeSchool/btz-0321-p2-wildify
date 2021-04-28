import React, { useState } from 'react';

export default function UpdateSongs({ item }) {
  const [count, setCount] = useState('1');

  console.log(count);

  return (
    <div className="flex flex-col  items-center align-middle justify-center w-full">
      <label htmlFor="">Update :</label>
      <select className="w-2/6 my-6" name="" id="">
        {item.map((song, index) => {
          return <option key={index}>{song.title}</option>;
        })}
      </select>
      <input className="w-2/6 my-6 text-black bg-gray-600" type="text" placeholder="Track Title" />
      <input className="w-2/6 my-6 text-black bg-gray-600" type="text" placeholder="Track Duration" />
    </div>
  );
}
