import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function UpdateSongs({ item }) {
  const [onSelect, setOnSelect] = useState();

  // const songData = {
  //   title:
  //   artist:
  //   album:
  //   duration:
  // }

  // const songUpdate = (e) => {
  //   e.preventDefault();
  //   fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/songs/${item[onSelect].id}`, {
  //     method: 'PUT',
  //     headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ songData }),
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

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
      <button className="border-2 border-white px-4 py-2 rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600">SUBMIT</button>
    </div>
  );
}
UpdateSongs.propTypes = {
  item: PropTypes.array.isRequired,
};
