import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import authContext from '../../../../context/authContext';

export default function UpdateSongs({ item }) {
  const { token } = useContext(authContext);
  const [onSelect, setOnSelect] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const [duration, setDuration] = useState();

  const songData = {
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: 'duration',
  };

  const songUpdate = (e) => {
    e.preventDefault();
    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/songs/${item[onSelect].id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(songData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const songDelete = () => {};

  return (
    <div className="flex flex-col  items-center align-middle justify-center w-full">
      <label htmlFor="song">Update :</label>
      <select onBlur={(e) => setOnSelect(e.target.value)} className="w-72 my-2 h-6 text-white rounded-xl px-4 bg-black bg-opacity-50" name="song">
        {item.map((song, index) => {
          return (
            <option value={index} key={index}>
              {song.title}
            </option>
          );
        })}
      </select>
      <input
        className="w-72 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder={onSelect ? item[onSelect].title : 'Track Title'}
      />
      <input
        className="w-72 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder={onSelect ? item[onSelect].duration : 'Track Title'}
      />
      <input
        className="w-72 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder={onSelect ? item[onSelect].album.picture : 'Track Title'}
      />
      <input
        className="w-72 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder={onSelect ? item[onSelect].album.title : 'Track Title'}
      />
      <input
        className="w-72 my-2 px-4 h-6 text-white bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder={onSelect ? item[onSelect].artist.name : 'Track Title'}
      />
      <div>
        <button onClick={songUpdate} className="border-2 border-white px-4 py-2 rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600">
          SUBMIT
        </button>
        <button onClick={songDelete} className="border-2 border-white px-4 py-2 rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600">
          DELETE
        </button>
      </div>
    </div>
  );
}
UpdateSongs.propTypes = {
  item: PropTypes.array.isRequired,
};
