import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SideBar({ sideBarClass }) {
  const [selectFile, setSelectFile] = useState();

  // const [title, setTitle] = useState('');
  // const [album, setAlbum] = useState('');
  // // const [picture, setPicture] = useState('');
  // const [artist, setArtist] = useState();

  const handleTitle = () => {
    // setTitle(e.target.value);
  };

  const handleAlbum = () => {
    // setAlbum(e.target.value);
  };

  const handlePicture = () => {
    // setPicture(e.target.value);
  };

  const handleArtist = () => {
    // setArtist(e.target.value);
  };
  // const formData = new FormData();

  // function fileUpload(file) {
  //   const url = 'https://bazify-backend.basile.vernouillet.dev/api/v1/songs';
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   return post(url, formData, config);
  // }

  // const fetchUpload = () => {
  //   fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', {
  //     method: 'POST',
  //     headers: {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-Custom-Header': 'ProcessThisImmediately',
  //       },
  //     },
  //     body: formData.append('file', selectFile, 'file'),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // eslint-disable-next-line no-console
  //       console.log('succes:', result);
  //     })
  //     .then(console.log('ok'))
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.error('Error:', error);
  //     });
  // };
  const changeHandler = (event) => {
    setSelectFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    let formData = new FormData();
    formData.append('file', selectFile);
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        result;
      })
      .catch((error) => {
        error;
      });
  };

  return (
    <div className={sideBarClass}>
      <form className="my-20  sticky flex flex-col justify-center items-center">
        <label className="text-white text-sm font-Orbit w-8/12" htmlFor="Title">
          Title:
        </label>
        <input onChange={handleTitle} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" type="text" name="title"></input>
        <label className="text-white text-sm font-Orbit w-8/12" htmlFor="Artist">
          Artist:
        </label>
        <input onChange={handleArtist} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" type="text" name="Artist"></input>
        <label className="text-white text-sm font-Orbit w-8/12" htmlFor="Album">
          Album:
        </label>
        <input onChange={handleAlbum} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" type="text" name="Album"></input>
        <label className="text-white text-sm font-Orbit w-8/12" htmlFor="Picture">
          Picture:
        </label>
        <input onChange={handlePicture} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" type="text" name="Picture"></input>
      </form>
      <form className="flex flex-col justify-center items-center ">
        <label className="text-white text-sm font-Orbit w-8/12" htmlFor="playlist">
          Playlist:
        </label>
        <select className="w-3/4 bg-black opacity-30 rounded-4xl" name="playlist" id="">
          <option className="w-3/4 bg-black text-white font-Orbit opacity-30 rounded-4xl my-4" value="1">
            Playlist 1
          </option>
          <option className="w-3/4 bg-black text-white font-Orbit opacity-30 rounded-4xl my-4" value="2">
            Playlist 2
          </option>
          <option className="w-3/4 bg-black text-white font-Orbit opacity-30 rounded-4xl my-4" value="3">
            Playlist 3
          </option>
          <option className="w-3/4 bg-black text-white font-Orbit opacity-30 rounded-4xl my-4" value="4">
            Playlist 4
          </option>
          <option className="w-3/4 bg-black text-white font-Orbit opacity-30 rounded-4xl my-4" value="5">
            Playlist 5
          </option>
        </select>
      </form>
      <div className="my-4 w-full flex flex-col items-center align-middle justify-center">
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
        <button className="bg-black opacity-60 rounded-2xl my-10 text-white px-8 py-4 hover:opacity-95 font-Orbit" onClick={handleSubmission}>
          UPLOAD
        </button>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  sideBarClass: PropTypes.string.isRequired,
};

export default SideBar;
