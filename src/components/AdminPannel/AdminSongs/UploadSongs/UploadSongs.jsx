import React, { useState, useContext } from 'react';
import authContext from '../../../../context/authContext';
import PropTypes from 'prop-types';
import axios from 'axios';
export default function UploadSongs({ playList, albums }) {
  const [albumId, setAlbumId] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [selectFile, setSelectFile] = useState();
  const { token } = useContext(authContext);
  const [progress, setProgress] = useState(0);
  const handleFile = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', selectFile);

    axios
      .post('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', formData, {
        headers: { Authorization: `Bearer ${token}` },
        onUploadProgress: (p) => {
          setProgress((p.loaded / p.total) * 100);
        },
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  const handlePictureSubmission = (e) => {
    e.preventDefault();
    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/albums/${albumId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ picture: imgUrl }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-512 h-full flex-col  flex items-center  ">
      <div className=" bg-black w-60  h-6 rounded-full">
        <div style={{ width: `${progress}%` }} className=" h-full bg-white text-center rounded-full"></div>
      </div>
      <label htmlFor="">Upload :{progress ? Math.floor(progress) : '00'}% </label>
      <input onChange={handleFile} className="my-2 w-4/5 h-9  bg-black bg-opacity-50 rounded-xl" type="file" />
      <input
        onChange={(e) => setImgUrl(e.target.value)}
        className="my-2 w-4/5 px-4 h-14 bg-black bg-opacity-50 rounded-xl"
        type="text"
        placeholder="Picture URL"
      />
      <select onChange={(e) => setAlbumId(e.target.value)} className="text-white bg-black bg-opacity-50 px-4  rounded-xl h-16 w-96" name="" id="">
        {albums.map((album, index) => {
          return (
            <option key={index} value={album.id}>
              {album.title}
            </option>
          );
        })}
      </select>
      <select className="my-2 w-4/5 px-4 h-14 bg-black bg-opacity-50 rounded-xl" name="" id="">
        {playList.map((playList, index) => {
          return (
            <option key={index} value="">
              {playList.title}
            </option>
          );
        })}
      </select>
      <button
        className="border-2 my-2 text-xs border-white px-4  rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600"
        onClick={handleSubmit}>
        UPLOAD
      </button>
      <button
        className="border-2 border-white px-4  rounded-xl focus:outline-none hover:bg-gray-800 active:bg-gray-600"
        onClick={handlePictureSubmission}>
        UPLOAD IMG
      </button>
    </div>
  );
}

UploadSongs.propTypes = {
  playList: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
};
