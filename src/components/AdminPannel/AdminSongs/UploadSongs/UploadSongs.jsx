import React from 'react';

export default function UploadSongs({ playList }) {
  return (
    <div className="w-full h-full flex-col flex items-center align-middle justify-center">
      <label htmlFor="">Upload :</label>
      <input className="my-2 w-2/6 bg-black bg-opacity-50 rounded-xl" type="file" />
      <input className="my-2 w-2/6 bg-black bg-opacity-50 rounded-xl" type="text" placeholder="Picture URL" />
      <select className="my-2 w-2/6 bg-black bg-opacity-50 rounded-xl" name="" id="">
        {playList.map((playList) => {
          return <option value="">{playList.title}</option>;
        })}
      </select>
    </div>
  );
}
