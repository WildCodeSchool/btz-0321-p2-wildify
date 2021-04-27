import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import Formbg from '../../img/BackGrounds/BgSideBarBG5.png';

function SideBar({ sideBarClass, albums, handleSideBar }) {
  const [selectFile, setSelectFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [albumIndex, setAlbumindex] = useState();
  const { width } = useWindowDimensions();
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
      <div
        className="w-full h-full py-4 px-6 900:px-6"
        style={{
          backgroundImage: `url(${Formbg})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top`,
        }}>
        <div className="mt-2 flex items-start">
          <h1 className="text-white font-scada text-3xl 900:text-3xl mr-5">Share your Favorits songs with us</h1>
          {width < 768 ? (
            <button className="focus:outline-none" onClick={handleSideBar}>
              <img src={ReturnBtn} alt="" />
            </button>
          ) : (
            ''
          )}
        </div>
        <form className="flex mt-5 flex-col">
          <h1 className="font-scada text-white text-2xl">1. Uplaod Music</h1>
          <label className="text-white text-lg font-cuprum mt-3" htmlFor="playlist">
            Select Playlist:
          </label>
          <select className="w-full h-10 bg-bgPlaybar shadow-input p-2 focus:outline-none text-white font-cuprum rounded-xl mt-1" id="">
            <option className="" value="1">
              Playlist 1
            </option>
            <option className="" value="2">
              Playlist 2
            </option>
            <option className="" value="3">
              Playlist 3
            </option>
            <option className="" value="4">
              Playlist 4
            </option>
            <option className="" value="5">
              Playlist 5
            </option>
          </select>

          <label className="text-white text-lg font-cuprum mt-5" htmlFor="upload">
            Select Music
          </label>
          <input
            className="w-full h-12 p-2  shadow-input2 focus:outline-none text-white font-cuprum rounded-xl customFiles "
            type="file"
            id="file"
            name="file"
            accept=".mp3"
            multiple
            onChange={changeFileHandler}
          />
          <button
            className="bg-bgPlaybar shadow-input2 focus:outline-none w-5/12 mt-3   rounded-xl text-sm text-white py-1 font-scada hover:text-mainColor hover:shadow-input"
            onClick={handleSubmission}>
            Upload Music
          </button>
        </form>
        <form className="sticky flex flex-col mt-8">
          <h1 className="font-scada text-white text-2xl">2. Upload image</h1>
          <div className=" w-full flex flex-col mt-3">
            <label className="w-full text-white text-lg font-cuprum mt-2" htmlFor="Picture">
              Select Album
            </label>
            <select
              className="w-full h-10 bg-bgPlaybar mt-1 shadow-input focus:outline-none text-white font-cuprum p-2 rounded-xl"
              onBlur={handlePictureChange}>
              {albums.map((album, key) => {
                return (
                  <option value={key} id={album.id} key={album.id}>
                    {album.title}
                  </option>
                );
              })}
            </select>
            <label className="w-full text-white text-lg font-cuprum mt-3" htmlFor="Picture">
              Album image Url :
            </label>
            <input
              onChange={handleChange}
              className="w-full h-10 bg-bgPlaybar shadow-input p-4 focus:outline-none text-white font-cuprum rounded-xl mt-1"
              type="text"
              name="Picture"></input>
            <button
              className="bg-bgPlaybar shadow-input2 focus:outline-none w-5/12 mt-5 rounded-xl text-sm text-white py-1 font-scada hover:text-mainColor hover:shadow-input"
              onClick={handlePictureSubmission}>
              Upload Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  sideBarClass: PropTypes.string.isRequired,
  albums: PropTypes.array.isRequired,
  handleSideBar: PropTypes.func.isRequired,
};

export default SideBar;
