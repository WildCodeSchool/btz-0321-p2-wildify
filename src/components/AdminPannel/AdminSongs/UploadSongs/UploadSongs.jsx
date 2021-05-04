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

  // const handleSubmit = () => {
  //   const formData = new FormData();
  //   formData.append('file', selectFile);

  //   axios
  //     .post('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', formData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //       onUploadProgress: (p) => {
  //         setProgress((p.loaded / p.total) * 100);
  //       },
  //     })
  //     .then((res) => res)
  //     .catch((res) => res);
  // };

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
    <div className="w-512 h-full flex-col  flex items-center  ">
      <div className=" bg-black w-72  h-6 rounded-full">
        <div style={{ width: `${progress}%` }} className=" h-full bg-white text-center rounded-full"></div>
      </div>
      <label htmlFor="">Upload :{progress ? Math.floor(progress) : '00'}% </label>
      <input onChange={handleFile} className="my-2 w-72 h-9  bg-black bg-opacity-50 rounded-xl" type="file" />
      <input
        onChange={(e) => setImgUrl(e.target.value)}
        className="my-2 w-72 px-4 h-14 bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder="Picture URL"
      />

      <div className="flex items-center align-middle justify-center">
        {' '}
        <button
          className="border-2 my-2 w-26 text-xs border-white px-4  rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600"
          onClick={handleSubmit}>
          UPLOAD TRACK
        </button>
      </div>
    </div>
  );
}

UploadSongs.propTypes = {
  myPlayList: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
};
