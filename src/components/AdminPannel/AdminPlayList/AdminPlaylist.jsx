import React, { useEffect, useContext, useState, useRef } from 'react';
import authContext from '../../../context/authContext';
export default function AdminPlaylist({ playList, playListFetch }) {
  const [playListTitle, setPlayListTitle] = useState();
  const [playListDescription, setPlayListDescription] = useState();
  const [playListPicture, setPlayListPicture] = useState();
  const [songs, setSongs] = useState([]);
  const [updateTitle, setUpdateTitle] = useState();
  const [updateDescription, setUpdateDescription] = useState();
  const [updatePicture, setUpdatePicture] = useState();
  const [updateSongs, setUpdateSongs] = useState([]);
  const [playListId, setPlayListId] = useState();

  const { token } = useContext(authContext);
  console.log(updateTitle, updateDescription, updatePicture, updateSongs);
  const playListData = {
    title: playListTitle,
    description: playListDescription,
    picture: playListPicture,
    songs: songs,
  };
  const playListUpdate = {
    title: updateTitle,
    description: updateDescription,
    picture: updatePicture,
    songs: updateSongs,
  };

  const createPlayList = (e) => {
    e.preventDefault();
    console.log(playListData);
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },

      body: JSON.stringify(playListData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    playListFetch();
  };

  const updatePlayList = (e) => {
    e.preventDefault();

    console.log(playListData);
    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/playlists/${playListId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },

      body: JSON.stringify(playListUpdate),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    playListFetch();
  };

  return (
    <div className="text-white w-full h-full flex flex-col items-center align-middle justify-center">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <form onSubmit={createPlayList} className="flex flex-col items-center justify-center align-middle w-full h-full">
          <label htmlFor="">Create A PlayList : </label>
          <input
            onChange={(e) => setPlayListTitle(e.target.value)}
            type="text"
            name="playList[title]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 my-2"
            placeholder="PlayList Title"
          />

          <input
            onChange={(e) => setPlayListDescription(e.target.value)}
            type="text"
            name="playList[Description]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 my-2"
            placeholder="PlayList Description"
          />
          <input
            onChange={(e) => setPlayListPicture(e.target.value)}
            type="text"
            name="playList[Picture Url]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 my-2"
            placeholder="PlayList Picture URL"
          />
          <button type="submit" className="bg-black opacity-50  rounded-xl border-2 border-<hite py-2 px-4">
            SUBMIT PLAYLIST
          </button>
        </form>
        <form onSubmit={updatePlayList} className="flex flex-col items-center justify-center align-middle">
          <label htmlFor="">Update PlayList :</label>
          <select onChange={(e) => setPlayListId(e.target.value)} name="" id="" className="bg-black px-4 rounded-xl w-52 opacity-50 h-8">
            {playList.map((playList, index) => {
              return (
                <option key={index} value={playList.id}>
                  {playList.title}
                </option>
              );
            })}
          </select>
          <input
            onChange={(e) => setUpdateTitle(e.target.value)}
            type="text"
            name="playList[title]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 my-2"
            placeholder="PlayList Title"
          />

          <input
            onChange={(e) => setUpdateDescription(e.target.value)}
            type="text"
            name="playList[Description]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 my-2"
            placeholder="PlayList Description"
          />
          <input
            onChange={(e) => setUpdatePicture(e.target.value)}
            type="text"
            name="playList[Picture Url]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 my-2"
            placeholder="PlayList Picture URL"
          />
          <button type="submit" className="bg-black opacity-50  rounded-xl border-2 border-white py-2 px-4">
            UPDATE PLAYLIST
          </button>
        </form>
        <div className="flex flex-col items-center justify-center align-middle">a</div>

        <div className="flex flex-col items-center justify-center align-middle px-6 ">
          <h1>PlayLists:</h1>
          <div className="h-5/6 w-full bg-black text-white border-white border-4 flex flex-col rounded-xl p-4 justify-center">
            <ul className="overflow-y-auto">
              {playList.map((playList, index) => {
                return (
                  <li className="border-b-2 flex items-center justify-center border-white py-2 w-full" key={index}>
                    {playList.title}
                    <img className="w-24 mx-3 rounded-full" src={playList.picture} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
