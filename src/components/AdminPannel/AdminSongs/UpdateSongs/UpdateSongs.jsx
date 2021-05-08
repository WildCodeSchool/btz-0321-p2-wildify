import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import authContext from '../../../../context/authContext';

export default function UpdateSongs({ item }) {
  const { token } = useContext(authContext);
  const [onSelect, setOnSelect] = useState();
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [albumPicture, setAlbumPicture] = useState();
  const [albumTitle, setAlbumTitle] = useState();
  const [artistName, setArtistName] = useState();
  const songData = {
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
  };

  const songUpdate = (e) => {
    e.preventDefault();
    fetch(`https://api-bazify.basile.vernouillet.dev/api/v1/songs/${item[onSelect].id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(songData),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  };
  useEffect(() => {
    if (onSelect) {
      setTitle(item[onSelect].title);
      setDuration(item[onSelect].duration);
      setAlbumPicture(item[onSelect].album.picture);
      setAlbumTitle(item[onSelect].album.title);
      setArtistName(item[onSelect].artist.name);
    }
  }, [onSelect]);

  const songDelete = () => {};

  return (
    <div className="bg-white p-5 bg-opacity-10 flex-col shadow-searchbar rounded-lg flex">
      <h1 className="text-white font-scada text-4xl font-bold">UpdateSong</h1>
      <label className="mt-2 text-white font-scada text-xl" htmlFor="song">
        Update :
      </label>
      <select
        onChange={(e) => setOnSelect(e.target.value)}
        className="focus:outline-none px-3 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
        name="song">
        {item.map((song, index) => {
          return (
            <option value={index} key={index}>
              {song.title}
            </option>
          );
        })}
      </select>
      <input
        className="focus:outline-none px-3 mt-5 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
        type="text"
        placeholder={onSelect ? title : 'Track Title'}
      />
      <input
        className="focus:outline-none px-3 mt-5 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
        type="text"
        placeholder={onSelect ? duration : 'Duration'}
      />
      <input
        className="focus:outline-none px-3 mt-5 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
        type="text"
        placeholder={onSelect ? albumPicture : 'Album Picture'}
      />
      <input
        className="focus:outline-none px-3 mt-5 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
        type="text"
        placeholder={onSelect ? albumTitle : 'Album Title'}
      />
      <input
        className="focus:outline-none px-3 mt-5 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
        type="text"
        placeholder={onSelect ? artistName : 'Artist Name'}
      />
      <div className="w-full mt-5">
        <button
          onClick={songUpdate}
          className="h-8 px-8  mr-4 md:font-scada text-white rounded-xl  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor">
          Submit
        </button>
        <button
          onClick={songDelete}
          className="h-8 px-8 md:font-scada text-white rounded-xl  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor">
          Delete
        </button>
      </div>
    </div>
  );
}
UpdateSongs.propTypes = {
  item: PropTypes.array.isRequired,
};
