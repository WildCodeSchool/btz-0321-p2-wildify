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

  const postSong = (e) => {
    e.preventDefault();

    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/playlists/${myPlayList[onSelect].id}`, {
      metgode: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(playListUpdate),
    })
      .then((res) => res.json())
      .then((res) => res);
    playListFetch();
  };
  return (
    <div className=" text-white w-full pr-20 flex">
      <form onSubmit={createPlayList} className="bg-white p-5 bg-opacity-10 flex-col shadow-searchbar rounded-lg flex w-97 mx-4">
        <h1 className="text-white font-scada text-4xl font-bold">Update Playlist</h1>
        <label className="mt-4 text-white font-scada text-ls" tmlFor="playList">
          PLaylist Title{' '}
        </label>
        <input
          onChange={(e) => setPlayListTitle(e.target.value)}
          type="text"
          name="playList"
          className="focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
          placeholder="PlayList Title"
        />
        <label className="mt-5 text-white font-scada text-ls" tmlFor="playList">
          Playlist Description{' '}
        </label>
        <input
          onChange={(e) => setPlayListDescription(e.target.value)}
          type="text"
          name="playList[Description]"
          className="focus:outline-none px-3  py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
          placeholder="PlayList Description"
        />
        <label className="mt-5 text-white font-scada text-ls" tmlFor="playList">
          PlayList Picture{' '}
        </label>
        <input
          onChange={(e) => setPlayListPicture(e.target.value)}
          type="text"
          name="playList[Picture Url]"
          className="focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
          placeholder="PlayList Picture URL"
        />
        <button
          type="submit"
          className="h-8 px-8 mt-5 w-full  mr-4 md:font-scada text-white rounded-ls  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor">
          Submit
        </button>
      </form>
      <div className="bg-white p-5 bg-opacity-10 flex-col shadow-searchbar rounded-lg flex w-97 mx-4">
        <form onSubmit={updatePlayList} className="flex flex-col">
          <label htmlFor="update" className="text-white font-scada text-ls font-bold">
            Update PlayList :
          </label>

          <select
            onBlur={(e) => setOnSelect(e.target.value)}
            name="update"
            id=""
            className="focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2">
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
            className="mt-4 focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
            placeholder={onSelect ? myPlayList[onSelect].title : 'PlayList Title'}
          />

          <input
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            type="text"
            name="playList[Description]"
            className="mt-4 focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
            placeholder={onSelect ? myPlayList[onSelect].description : 'PlayList Description'}
          />
          <input
            value={updatePicture}
            onChange={(e) => setUpdatePicture(e.target.value)}
            type="text"
            name="playList[Picture Url]"
            className="mt-4 focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
            placeholder={onSelect ? myPlayList[onSelect].picture : 'PlayList Picture'}
          />
          <button
            type="submit"
            className="h-8 px-8 mt-5 w-full  mr-4 md:font-scada text-white rounded-lg  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor">
            Update Playlist
          </button>
        </form>
        <div className="mt-4">
          <label className=" text-white font-scada text-ls font-bold" htmlFor="add-song">
            Add a song to a playlist :
          </label>
          <select
            onBlur={(e) => setOnSelect(e.target.value)}
            className=" mt-1 w-full focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2"
            name="add-song"
            id="">
            {item.map((song, index) => {
              return <option key={index}>{song.title}</option>;
            })}
          </select>
          <div className="mt-3 flex flex-col ">
            <h1 className="text-white font-scada text-ls font-bold">SelectPlaylist</h1>
            <select className=" mt-1 focus:outline-none px-3 py-2 bg-white bg-opacity-20 rounded-lg shadow-input2" name="" id="">
              {myPlayList.map((playList, index) => {
                return <option key={index}>{playList.title}</option>;
              })}
            </select>
            <button
              onClick={postSong}
              type="submit"
              className="h-8 px-8 mt-5 w-full  mr-4 md:font-scada text-white rounded-lg  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor">
              Update Playlist
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 bg-opacity-10 flex-col shadow-searchbar rounded-lg flex w-97 mx-4">
        <h1 className="text-white font-scada text-4xl font-bold">PlayLists:</h1>
        <div className=" text-white  flex flex-col rounded-ls">
          <ul className="overflow-y-auto">
            {myPlayList.map((playList, index) => {
              return (
                <li className="border-b-2 flex items-center text-ls border-white py-2 w-full" key={index}>
                  <img className="w-12 mx- rounded-full" src={playList.picture} alt="" />
                  <div className="ml-2 text-xs">
                    <div className="font-bold">{playList.title}</div>
                    <div>{playList.description}</div>
                  </div>
                </li>
              );
            })}
          </ul>
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
