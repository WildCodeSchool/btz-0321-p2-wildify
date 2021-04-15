import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SideBar({ sideBarClass }) {
  const [selectFile, setSelectFile] = useState();
  const [isFilePicked, setFilePicked] = useState(false);
  const [setTitle] = useState('');
  const [setAlbum] = useState('');
  const [setPicture] = useState('');
  const [setArtist] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAlbum = (e) => {
    setAlbum(e.target.value);
  };

  const handlePicture = (e) => {
    setPicture(e.target.value);
  };

  const handleArtist = (e) => {
    setArtist(e.target.value);
  };

  const fetchUpload = () => {
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', {
      method: 'POST',
      headers: {
        headers: {
          'Content-Type': 'audio/mpeg',
        },
      },
      body: FormData,
    })
      .then((response) => response.json())
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log('succes:', result);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  };
  const changeHandler = (event) => {
    setSelectFile(event.target.files[0]);
    setFilePicked(true);
  };

  const handleSubmission = () => {
    fetchUpload();
    // eslint-disable-next-line no-console
    console.log(selectFile, isFilePicked);
  };

  return (
    <div className={sideBarClass}>
      <div className="my-20 sticky flex flex-col justify-center items-center">
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Title">
          Title:
        </label>
        <input onChange={handleTitle} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="title"></input>
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Artist">
          Artist:
        </label>
        <input onChange={handleArtist} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="Artist"></input>
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Album">
          Album:
        </label>
        <input onChange={handleAlbum} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="Album"></input>
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="Picture">
          Picture:
        </label>
        <input onChange={handlePicture} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" name="Picture"></input>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <label className="text-white text-sm md:font-scada w-8/12" htmlFor="playlist">
          Playlist:
        </label>
        <select className="w-3/4 bg-black opacity-30 rounded-4xl" name="playlist" id="">
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="1">
            Playlist 1
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="2">
            Playlist 2
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="3">
            Playlist 3
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="4">
            Playlist 4
          </option>
          <option className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" value="5">
            Playlist 5
          </option>
        </select>
      </div>
      <div className="my-40 w-full flex flex-col items-center align-middle justify-center">
        <label className="text-white text-lg cursor-pointer" htmlFor="upload">
          Upload Song:
        </label>
        <input
          className="w-11/12 h-24 bg-black cursor-pointer text-white opacity-30 rounded-2xl my-4"
          type="file"
          id="file"
          name="file"
          onChange={changeHandler}
        />
        <button className="bg-black opacity-60 rounded-2xl my-10 text-white px-8 py-4 hover:opacity-95 md:font-scada" onClick={handleSubmission}>
          UPLOAD
        </button>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  sideBarClass: PropTypes.string.isRequired,
  setSideBarClass: PropTypes.strfuncing.isRequired,
};

export default SideBar;
