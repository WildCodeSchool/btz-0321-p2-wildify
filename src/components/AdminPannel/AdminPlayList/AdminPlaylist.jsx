import React, { useContext, useState } from 'react';
import authContext from '../../../context/authContext';
import PropTypes from 'prop-types';
export default function AdminPlaylist({ myPlayList, playListFetch, item }) {
  const [playListTitle, setPlayListTitle] = useState();
  const [playListDescription, setPlayListDescription] = useState();
  const [playListPicture, setPlayListPicture] = useState();
  const [songs] = useState([]);
  const [updateTitle, setUpdateTitle] = useState();
  const [updateDescription, setUpdateDescription] = useState();
  const [updatePicture, setUpdatePicture] = useState();
  const [onSelect, setOnSelect] = useState();

  const { token } = useContext(authContext);

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
  };

  const createPlayList = (e) => {
    e.preventDefault();
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },

      body: JSON.stringify(playListData),
    })
      .then((res) => res.json())
      .then((res) => res);
    playListFetch();
  };

  const updatePlayList = (e) => {
    e.preventDefault();

    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/playlists/${myPlayList[onSelect].id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },

      body: JSON.stringify(playListUpdate),
    })
      .then((res) => res.json())
      .then((res) => res);
    playListFetch();
  };

  return (
    <div className=" text-white w-full h-full flex flex-col items-center align-middle justify-center">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <form onSubmit={createPlayList} className="flex flex-col items-center justify-center align-middle w-full h-full">
          <label htmlFor="playList">Create A PlayList : </label>
          <input
            onChange={(e) => setPlayListTitle(e.target.value)}
            type="text"
            name="playList"
            className="bg-black opacity-50 h-8 rounded-xl w-4/5 px-4 my-2"
            placeholder="PlayList Title"
          />

          <input
            onChange={(e) => setPlayListDescription(e.target.value)}
            type="text"
            name="playList[Description]"
            className="bg-black opacity-50 h-8 rounded-xl w-4/5 px-4 my-2"
            placeholder="PlayList Description"
          />
          <input
            onChange={(e) => setPlayListPicture(e.target.value)}
            type="text"
            name="playList[Picture Url]"
            className="bg-black opacity-50 h-8 rounded-xl w-4/5 px-4 my-2"
            placeholder="PlayList Picture URL"
          />
          <button type="submit" className="border-2 border-white px-4 py-2 rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600">
            SUBMIT PLAYLIST
          </button>
        </form>
        <form onSubmit={updatePlayList} className="flex flex-col items-center justify-center align-middle">
          <label htmlFor="update">Update PlayList :</label>
          <select onBlur={(e) => setOnSelect(e.target.value)} name="update" id="" className="bg-black px-4 rounded-xl  opacity-50 h-8">
            {myPlayList.map((playList, index) => {
              return (
                <option key={index} value={index}>
                  {playList.title}
                </option>
              );
            })}
          </select>
          <input
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
            type="text"
            name="playList[title]"
            className="bg-black opacity-50 h-8 rounded-xl w-4/5 px-4 my-2"
            placeholder={onSelect ? myPlayList[onSelect].title : 'PlayList Title'}
          />

          <input
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            type="text"
            name="playList[Description]"
            className="bg-black opacity-50 h-8 rounded-xl w-4/5 px-4 my-2"
            placeholder={onSelect ? myPlayList[onSelect].description : 'PlayList Description'}
          />
          <input
            value={updatePicture}
            onChange={(e) => setUpdatePicture(e.target.value)}
            type="text"
            name="playList[Picture Url]"
            className="bg-black opacity-50 h-8 rounded-xl px-4 w-4/5 my-2"
            placeholder={onSelect ? myPlayList[onSelect].picture : 'PlayList Picture'}
          />
          <button type="submit" className="border-2 border-white px-4 py-2 rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600">
            UPDATE PLAYLIST
          </button>
        </form>
        <div className="flex flex-col  py-8 px-10 items-center justify-center align-middle">
          <label htmlFor="add-song">Add a song to a playlist :</label>
          <select
            onBlur={(e) => setOnSelect(e.target.value)}
            className="w-64 my-2 bg-black text-white opacity-50 rounded-xl py-2 px-4
          "
            name="add-song"
            id="">
            {item.map((song, index) => {
              return <option key={index}>{song.title}</option>;
            })}
          </select>
          <select
            className="w-64 my-2 bg-black text-white opacity-50 rounded-xl py-2 px-4
          "
            name=""
            id="">
            {myPlayList.map((playList, index) => {
              return <option key={index}>{playList.title}</option>;
            })}
          </select>
          <div className="w-full h-full bg-black border-white border-2 rounded-xl">{}</div>
        </div>

        <div className="flex flex-col items-center justify-center align-middle px-6 ">
          <h1>PlayLists:</h1>
          <div className="h-5/6 w-full bg-black text-white border-white border-4 flex flex-col rounded-xl p-4 justify-center">
            <ul className="overflow-y-auto">
              {myPlayList.map((playList, index) => {
                return (
                  <li className="border-b-2 flex text-xl items-center justify-center border-white py-2 w-full" key={index}>
                    <div className="text-xs">
                      {playList.title} - {playList.description}
                    </div>
                    <img className="w-14 mx-3 rounded-full" src={playList.picture} alt="" />
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

AdminPlaylist.propTypes = {
  myPlayList: PropTypes.array.isRequired,
  playListFetch: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
};
