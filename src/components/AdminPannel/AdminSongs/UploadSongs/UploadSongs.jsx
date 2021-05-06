import React, { useState, useContext } from 'react';
import authContext from '../../../../context/authContext';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function UploadSongs() {
  const [imgUrl, setImgUrl] = useState();
  const [selectFile, setSelectFile] = useState();
  const { token } = useContext(authContext);
  const [progress, setProgress] = useState(0);
  const handleFile = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectFile);
    await axios
      .post('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', formData, {
        headers: { Authorization: `Bearer ${token}` },
        onUploadProgress: (p) => {
          setProgress((p.loaded / p.total) * 100);
        },
      })
      .then((res) => {
        fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/albums/${res.data.albumId}`, {
          method: 'PUT',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ picture: imgUrl }),
        }).then((res) => res);
      });
  };

  return (
    <div className="bg-white w-full  p-5 bg-opacity-10 flex-col shadow-searchbar rounded-lg  flex">
      <h1 className="text-white font-scada text-4xl font-bold">Upload Song</h1>
      <h2 className="mt-5 text-white font-scada text-xl">MusicFiles</h2>
      <input onChange={handleFile} className="px-3 py-5 bg-white bg-opacity-10 rounded-lg shadow-input2" type="file" />
      <h2 className="mt-5 text-white font-scada text-xl">Ablum Picture</h2>
      <input
        onChange={(e) => setImgUrl(e.target.value)}
        className="px-3 py-5 bg-white bg-opacity-10 rounded-lg shadow-input2"
        type="text"
        placeholder="Picture URL"
      />
      <div className="flex items-center">
        {' '}
        <button
          className="mt-5 w-full h-8 px-8 md:font-scada text-white rounded-xl  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor"
          onClick={handleSubmit}>
          Upload Song
        </button>
      </div>
      <label className="mt-8" htmlFor="">
        Upload :{progress ? Math.floor(progress) : '00'}%{' '}
      </label>
      <div className=" mt-2 bg-white bg-opacity-10 h-6 rounded-full shadow-input2">
        <div style={{ width: `${progress}%` }} className=" h-full bg-mainColor text-center rounded-full"></div>
      </div>
    </div>
  );
}
