import React, { useEffect, useContext, useState, useRef } from 'react';
import authContext from '../../../context/authContext';
export default function AdminPlaylist({ playList }) {
  const [playListTitle, setPlayListTitle] = useState();
  const [playListDescription, setPlayListDescription] = useState();
  const [playListPicture, setPlayListPicture] = useState();
  const [songs, setSongs] = useState([]);
  const { token } = useContext(authContext);

  const playListData = {
    title: playListTitle,
    description: playListDescription,
    picture: playListPicture,
    songs: songs,
  };
  const playListUpdate = {
    title: playListTitle,
    description: playListDescription,
    picture: playListPicture,
    songs: songs,
  };

  const createPlaylist = (e) => {
    e.preventDefault();
    console.log(playListData);
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },

      body: JSON.stringify(playListData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const updatePlaylist = (e) => {
    e.preventDefault();
    console.log(playListData);
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },

      body: JSON.stringify(playListUpdate),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="text-white w-full h-full flex flex-col items-center align-middle justify-center">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <form onSubmit={createPlaylist} className="flex flex-col items-center justify-center align-middle">
          <input
            onChange={(e) => setPlayListTitle(e.target.value)}
            type="text"
            name="playList[title]"
            className="bg-black opacity-50 rounded-xl  my-2"
            placeholder="PlayList Title"
          />

          <input
            onChange={(e) => setPlayListDescription(e.target.value)}
            type="text"
            name="playList[Description]"
            className="bg-black opacity-50 rounded-xl  my-2"
            placeholder="PlayList Description"
          />
          <input
            onChange={(e) => setPlayListPicture(e.target.value)}
            type="text"
            name="playList[Picture Url]"
            className="bg-black opacity-50 rounded-xl  my-2"
            placeholder="PlayList Picture URL"
          />
          <button type="submit" className="bg-black opacity-50 rounded-xl border-2 border-<hite py-2 px-4">
            SUBMIT PLAYLIST
          </button>
        </form>
        <form className="flex flex-col items-center justify-center align-middle">
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
        </form>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
        <div className="flex flex-col items-center justify-center align-middle">a</div>
      </div>
    </div>
  );
}
