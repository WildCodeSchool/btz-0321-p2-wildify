import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SideBar({ sideBarClass, albums }) {
  const [selectFile, setSelectFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [albumIndex, setAlbumindex] = useState();
  const changeFileHandler = (event) => {
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

  // const handlePictureSubmission = (e) => {
  //   e.preventDefault();
  //   fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/albums/29dd4385-3a85-41d0-ab3b-14c9db7abc2e', {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ picture: imgUrl }),
  //   }).then((res) => res);
  // };

  const handlePictureSubmission = (e) => {
    e.preventDefault();
    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/albums/${albums[albumIndex].id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ picture: imgUrl }),
    }).then((res) => res);
  };

  const handleChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handlePictureChange = (e) => {
    setAlbumindex(e.target.value);
  };

  return (
    <div className={sideBarClass}>
      <form className="my-20  sticky flex flex-col justify-center items-center">
        <select onBlur={handlePictureChange}>
          {albums.map((album, key) => {
            return (
              <option className="w-3/4 bg-black text-white font-Orbit opacity-30 rounded-4xl my-4" value={key} id={album.id} key={album.id}>
                {album.title}
              </option>
            );
          })}
        </select>
        <label className="text-white text-sm font-Orbit w-8/12" htmlFor="Picture">
          Picture:
        </label>
        <input onChange={handleChange} className="w-3/4 bg-black text-white opacity-30 rounded-4xl my-4" type="text" name="Picture"></input>
        <button className="bg-black opacity-60 rounded-2xl my-10 text-white px-8 py-4 hover:opacity-95 font-Orbit" onClick={handlePictureSubmission}>
          UPLOAD
        </button>
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
          onChange={changeFileHandler}
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
  albums: PropTypes.array.isRequired,
};

export default SideBar;
